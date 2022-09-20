import * as vscode from 'vscode';
import { BlocksType } from './SFCBlock';

export interface Split {
  editor: vscode.TextEditor;
  type?: BlocksType;
  viewSizeIncreased?: boolean;
}
