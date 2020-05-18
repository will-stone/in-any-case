import * as assert from 'assert'
import * as vscode from 'vscode'

import CASES from '../../cases'

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const testString = async (cmd: string): Promise<string> => {
  const editor = vscode.window.activeTextEditor as vscode.TextEditor
  const { document } = editor
  await vscode.commands.executeCommand(`extension.iac.${cmd}`)
  // above await doesn't work for some reason. This hack fixes that.
  await delay(150)
  const text = document.getText()
  return text
}

const reset = async (testInput: string): Promise<void> => {
  const editor = vscode.window.activeTextEditor as vscode.TextEditor
  await editor.edit((edit) => {
    edit.replace(
      new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 27)),
      testInput,
    )
  })
  editor.selection = new vscode.Selection(
    new vscode.Position(0, 0),
    new vscode.Position(0, 27),
  )
}

describe('Extension Tests', () => {
  before(async () => {
    const document = await vscode.workspace.openTextDocument()
    await vscode.window.showTextDocument(document)
  })

  CASES.forEach(({ commandId, testInput, testOutput }) => {
    it(commandId, (done) => {
      reset(testInput).then(() =>
        testString(commandId)
          .then((text) => {
            assert.equal(text, testOutput)
          })
          .then(done),
      )
    })
  })
})
