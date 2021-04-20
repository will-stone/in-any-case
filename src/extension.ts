import * as vscode from 'vscode'

import CASES from './cases'

import Range = vscode.Range
import TextEditor = vscode.TextEditor

export function doChange(changer: TChanger): void {
  const editor = vscode.window.activeTextEditor as TextEditor
  const { document, selections } = editor
  editor.edit((edit) => {
    selections.forEach((selection) => {
      const text = document.getText(new Range(selection.start, selection.end))
      const updatedText = changer(text)
      edit.replace(selection, updatedText)
    })
  })
}

export const activate = (context: vscode.ExtensionContext): void => {
  CASES.forEach(({ commandId, changer }) => {
    const disposable = vscode.commands.registerCommand(
      `extension.iac.${commandId}`,
      () => {
        doChange(changer)
      },
    )

    context.subscriptions.push(disposable)
  })
}
