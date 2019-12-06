import * as assert from 'assert'
import * as vscode from 'vscode'

import Position = vscode.Position
import Range = vscode.Range
import Selection = vscode.Selection
import TextEditor = vscode.TextEditor

import CASES from '../cases'

const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const testString = async (cmd: string): Promise<string> => {
  const editor = vscode.window.activeTextEditor as TextEditor
  const { document } = editor
  await vscode.commands.executeCommand(`extension.iac.${cmd}`)
  await delay(150) // above await doesn't work for some reason. This hack fixes that.
  const text = document.getText()
  return text
}

const reset = async (testInput: string): Promise<void> => {
  const editor = vscode.window.activeTextEditor as TextEditor
  await editor.edit(edit => {
    edit.replace(new Range(new Position(0, 0), new Position(0, 27)), testInput)
  })
  editor.selection = new Selection(new Position(0, 0), new Position(0, 27))
}

describe('Extension Tests', () => {
  before(async () => {
    const doc = await vscode.workspace.openTextDocument()
    await vscode.window.showTextDocument(doc)
  })

  CASES.forEach(({ commandId, testInput, testOutput }) => {
    it(commandId, async () => {
      await reset(testInput)
      const text = await testString(commandId)
      assert.equal(text, testOutput)
    })
  })
})
