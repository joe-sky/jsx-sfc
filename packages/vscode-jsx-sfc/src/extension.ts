import * as vscode from 'vscode';
import { ref, computed } from '@vue/reactivity';
import { parse } from './parser';
import { SFCBlock } from './types';

export async function activate(context: vscode.ExtensionContext) {
  const getDocDescriptor = useDocDescriptor();

  context.subscriptions.push(vscode.commands.registerCommand('jsx-sfc.action.splitEditors', async _ => onSplit()));

  async function onSplit() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const doc = editor.document;
    const descriptor = getDocDescriptor(doc.getText());
    const blocksSet: SFCBlock[][] = [];
    const blocksFoldSet: SFCBlock[][] = [];

    if (descriptor.component || descriptor.options) {
      blocksSet.push([...descriptor.component, ...descriptor.options]);
      blocksFoldSet.push([...descriptor.template, ...descriptor.styles]);
    }
    if (descriptor.template.length) {
      blocksSet.push(descriptor.template);
      blocksFoldSet.push([...descriptor.component, ...descriptor.options, ...descriptor.styles]);
    }
    if (descriptor.styles.length) {
      blocksSet.push(descriptor.styles);
      blocksFoldSet.push([...descriptor.component, ...descriptor.options, ...descriptor.template]);
    }

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
      if (!editor) break;
      await vscode.commands.executeCommand('editor.unfoldAll');
      const positions = blockFolds.map(block => doc.positionAt(block.locStartOffset));
      await vscode.commands.executeCommand('editor.fold', {
        levels: 1,
        direction: 'up',
        selectionLines: positions.map(position => position.line)
      });
      editor.revealRange(
        new vscode.Range(doc.positionAt(firstBlock.locStartOffset), new vscode.Position(editor.document.lineCount, 0)),
        vscode.TextEditorRevealType.AtTop
      );
    }
  }
}

function useDocDescriptor() {
  const splitDocText = ref('');
  const splitDocDescriptor = computed(() => parse(splitDocText.value));

  return getDescriptor;

  function getDescriptor(text: string) {
    splitDocText.value = text;
    return splitDocDescriptor.value;
  }
}
