import * as glob from 'glob'
import * as Mocha from 'mocha'
import * as path from 'path'

export function run(): Promise<void> {
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
      files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)))

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
