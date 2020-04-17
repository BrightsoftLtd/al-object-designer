// Credits: https://github.com/auchenberg/vscode-browser-preview/blob/master/ext-src/targetTreeProvider.ts

import * as vscode from 'vscode';

export class ALOpenTreeProvider implements vscode.TreeDataProvider<object> {
  private _onDidChangeTreeData: vscode.EventEmitter<object | undefined> = new vscode.EventEmitter<object | undefined>();
  readonly onDidChangeTreeData: vscode.Event<object | undefined> = this._onDidChangeTreeData.event;

  constructor() {}

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: object): vscode.TreeItem {
    return element;
  }

  getChildren(element?: object): Thenable<object[]> {
    vscode.commands.executeCommand('alObjectDesigner.openALWindow');
    vscode.commands.executeCommand('workbench.view.explorer');

    this._onDidChangeTreeData.fire(); // Make sure collection is not cached.
    return Promise.reject([]);
  }
}