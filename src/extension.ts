import * as vscode from 'vscode'
import CASES from './cases'

import Range = vscode.Range
import TextEditor = vscode.TextEditor

export const activate = () => {
  CASES.forEach(({ commandId, changer }) => {
    vscode.commands.registerCommand(`extension.iac.${commandId}`, () => {
      doChange(changer)
    })
  })
}

export function doChange(changer: TChanger) {
  const editor = vscode.window.activeTextEditor as TextEditor
  const { document, selections } = editor
  editor.edit(edit => {
    selections.forEach(selection => {
      const text = document.getText(new Range(selection.start, selection.end))
      const newText = changer(text)
      edit.replace(selection, newText)
    })
  })
}
