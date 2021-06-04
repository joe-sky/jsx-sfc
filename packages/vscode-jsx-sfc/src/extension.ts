import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('jsx-sfc.action.splitEditors', async _ => {}));
}
