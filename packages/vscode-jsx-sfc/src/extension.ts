import * as vscode from 'vscode';
import { ref, computed } from '@vue/reactivity';
import debounce from 'lodash/debounce';
import { parse } from './parser';
import { SFCBlock, BlocksType } from './types';

/**
 * This code file is developed with reference to the original author's code:
 * https://github.com/johnsoncodehk/volar/blob/master/packages/client/src/features/splitEditors.ts
 */
export async function activate(context: vscode.ExtensionContext) {
  const getDocDescriptor = useDocDescriptor();
  let splits: {
    editor: vscode.TextEditor;
    type: BlocksType;
  }[] = [];

  function createBlocks(text: string) {
    const descriptor = getDocDescriptor(text);
    const blocksSet: SFCBlock[][] = [];
    const blocksFoldSet: SFCBlock[][] = [];
    const blocksType: BlocksType[] = [];

    if (descriptor) {
      if (descriptor.component?.length || descriptor.static?.length) {
        blocksSet.push([...descriptor.component, ...descriptor.static]);
        blocksFoldSet.push([...descriptor.render, ...descriptor.styles]);
        blocksType.push(BlocksType.Component);
      }
      if (descriptor.render?.length) {
        blocksSet.push(descriptor.render);
        blocksFoldSet.push([...descriptor.component, ...descriptor.static, ...descriptor.styles]);
        blocksType.push(BlocksType.Render);
      }
      if (descriptor.styles?.length) {
        blocksSet.push(descriptor.styles);
        blocksFoldSet.push([...descriptor.component, ...descriptor.static, ...descriptor.render]);
        blocksType.push(BlocksType.Styles);
      }
    }

    return { blocksSet, blocksFoldSet, blocksType };
  }

  vscode.workspace.onDidCloseTextDocument(doc => {
    splits = splits.filter(split => split.editor.document.uri.toString() !== doc.uri.toString());
  });

  vscode.window.onDidChangeVisibleTextEditors(
    debounce((editors: vscode.TextEditor[]) => {
      // Delete the reference after closing a split editor.
      if (editors.length < splits.length) {
        splits = splits.filter(split => editors.find(ed => ed.viewColumn === split.editor.viewColumn));
      }

      // Reset the reference of each editor correctly when switching the tabs of the editor.
      splits = splits.map(split => {
        const editor = editors.find(
          ed =>
            ed.viewColumn === split.editor.viewColumn &&
            ed.document.uri.toString() === split.editor.document.uri.toString()
        ) as vscode.TextEditor;

        if (editor) {
          return {
            ...split,
            editor
          };
        }

        return split;
      });
    }, 300)
  );

  /**
   * Refold when saving here, because syntax errors may occur during user input and editing, resulting in some collapsed code being expanded.
   */
  vscode.workspace.onDidSaveTextDocument(
    debounce((doc: vscode.TextDocument) => {
      const currentEditor = vscode.window.activeTextEditor;
      const currentSplit = splits.find(split => split.editor === currentEditor);
      if (!currentSplit) {
        return;
      }

      const { blocksSet, blocksFoldSet } = createBlocks(doc.getText());
      if (!blocksSet.length) {
        return;
      }

      async function refold() {
        for (let i = 0; i < splits.length; i++) {
          const split = splits[i];
          /**
           * After removing the comments here, the current editor will not be refolded when saving.
           * However, it was later found that the current editor still needs to be folded,
           * because users may add a new SFC component to the current file.
           */
          // if (split.editor === currentEditor) {
          //   continue;
          // }

          const { editor } = split;
          const range = editor.visibleRanges;
          const blockFolds = blocksFoldSet[i];

          await vscode.window.showTextDocument(editor.document, editor.viewColumn);
          await vscode.commands.executeCommand('editor.unfoldAll');
          const positions = blockFolds.map(block => doc.positionAt(block.locStartOffset));
          const endPositions = blockFolds.map(block => doc.positionAt(block.locEndOffset));
          await vscode.commands.executeCommand('editor.fold', {
            levels: 1,
            direction: 'up',
            selectionLines: positions
              .filter((pos, index) => pos.line < endPositions[index].line)
              .map(position => position.line)
          });

          editor.revealRange(range[0], vscode.TextEditorRevealType.AtTop);
        }

        if (currentEditor) {
          await vscode.window.showTextDocument(currentEditor.document, currentEditor.viewColumn);
        }
      }

      refold();
    }, 300)
  );

  async function onSplit() {
    splits.length = 0;

    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const doc = editor.document;
    const { blocksSet, blocksFoldSet, blocksType } = createBlocks(doc.getText());

    for (let i = 0; i < blocksSet.length; i++) {
      const blocks = blocksSet[i];
      const blockFolds = blocksFoldSet[i];
      const firstBlock = blocks.sort((a, b) => a.locStartOffset - b.locStartOffset)[0];

      if (i !== 0 && i % 2 === 1) {
        await vscode.commands.executeCommand('workbench.action.splitEditorRight');
      }
      if (i !== 0 && i % 2 === 0) {
        await vscode.commands.executeCommand('workbench.action.splitEditorDown');
      }

      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        break;
      }

      await vscode.commands.executeCommand('editor.unfoldAll');
      const positions = blockFolds.map(block => doc.positionAt(block.locStartOffset));
      const endPositions = blockFolds.map(block => doc.positionAt(block.locEndOffset));
      await vscode.commands.executeCommand('editor.fold', {
        levels: 1,
        direction: 'up',
        selectionLines: positions
          .filter((pos, index) => pos.line < endPositions[index].line)
          .map(position => position.line)
      });

      editor.revealRange(
        new vscode.Range(doc.positionAt(firstBlock.locStartOffset), new vscode.Position(editor.document.lineCount, 0)),
        vscode.TextEditorRevealType.AtTop
      );

      splits.push({
        editor,
        type: blocksType[i]
      });
    }
  }

  context.subscriptions.push(vscode.commands.registerCommand('jsx-sfc.action.splitEditors', onSplit));
}

function useDocDescriptor() {
  const splitDocText = ref('');
  const splitDocDescriptor = computed(() => {
    try {
      return parse(splitDocText.value);
    } catch (ex) {
      return null;
    }
  });

  function getDescriptor(text: string) {
    splitDocText.value = text;
    return splitDocDescriptor.value;
  }

  return getDescriptor;
}
