import * as vscode from 'vscode'

import CASES from './cases'
import type { TChanger } from './model'

import Range = vscode.Range
import TextEditor = vscode.TextEditor

export function doChange(changer: TChanger): void {
  const editor = vscode.window.activeTextEditor as TextEditor
  const { document, selections } = editor
  editor.edit((edit) => {
    for (const selection of selections) {
      const text = document.getText(new Range(selection.start, selection.end))
      const updatedText = changer(text)
      edit.replace(selection, updatedText)
    }
  })
}

export const activate = (context: vscode.ExtensionContext): void => {
  for (const { commandId, changer } of CASES) {
    const disposable = vscode.commands.registerCommand(
      `extension.iac.${commandId}`,
      () => {
        doChange(changer)
      },
    )

    context.subscriptions.push(disposable)
  }
}
