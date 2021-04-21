import glob from 'glob'
import Mocha from 'mocha'
import path from 'path'
import vscode from 'vscode'

export async function run(): Promise<void> {
  // Let VS Code load the test workspace.
  await vscode.workspace.openTextDocument()
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

  // Create the mocha test
  const mocha = new Mocha({
    ui: 'bdd',
    color: true,
  })

  const testsRoot = path.resolve(__dirname, '..')

  // eslint-disable-next-line unicorn/prevent-abbreviations
  return new Promise((c, e) => {
    glob('**/**.test.js', { cwd: testsRoot }, (error, files) => {
      if (error) {
        return e(error)
      }

      // Add files to the test suite
      for (const f of files) {
        mocha.addFile(path.resolve(testsRoot, f))
      }

      try {
        // Run the mocha test
        mocha.run((failures) => {
          if (failures > 0) {
            e(new Error(`${failures} tests failed.`))
          } else {
            c()
          }
        })
      } catch (caughtError) {
        // eslint-disable-next-line no-console
        console.error(caughtError)
        e(caughtError)
      }
    })
  })
}
