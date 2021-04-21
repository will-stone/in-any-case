/* eslint-disable unicorn/no-null */
/* eslint-disable no-console */
import * as assert from 'assert'
import * as vscode from 'vscode'

import CASES from '../../cases'

describe('Extension Tests', () => {
  for (const { commandId, testInput, testOutput } of CASES) {
    it(commandId, async () => {
      const document = await vscode.workspace.openTextDocument()
      const editor = await vscode.window.showTextDocument(document)

      await editor.edit((editBuilder) => {
        editBuilder.replace(
          new vscode.Selection(
            new vscode.Position(0, 0),
            new vscode.Position(0, 99),
          ),
          testInput,
        )
      })

      assert.strictEqual(document.getText(), testInput)

      editor.selection = new vscode.Selection(
        new vscode.Position(0, 0),
        new vscode.Position(0, 99),
      )

      await vscode.commands.executeCommand(`extension.iac.${commandId}`)

      // The above doesn't wait for the text to actually change. I've tried using
      // `then` but no luck. I don't know why it doesn't work 😭 So we now have
      // to resort to a hacky sleep.
      await new Promise((resolve) => {
        setTimeout(resolve, 5)
      })

      const actual = document.getText()

      assert.deepStrictEqual(actual, testOutput)
    })
  }
})
