'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ALObjectDesignerPanel } from './ALObjectDesignerPanel';

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.openALWindow', () => {
        ALObjectDesignerPanel.createOrShow(context.extensionPath, "List");
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {
}