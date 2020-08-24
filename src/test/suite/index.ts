import glob from 'glob'
import Mocha from 'mocha'
import * as path from 'path'

export function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'bdd',
  })

  const testsRoot = path.resolve(__dirname, '..')

  return new Promise((callback, errorCallback) => {
    glob('**/**.test.js', { cwd: testsRoot }, (error, files) => {
      if (error) {
        return errorCallback(error)
      }

      // Add files to the test suite
      files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)))

      try {
        // Run the mocha test
        mocha.run((failures) => {
          if (failures > 0) {
            return errorCallback(new Error(`${failures} tests failed.`))
          }

          return callback()
        })
      } catch (error_) {
        return errorCallback(error_)
      }

      return false
    })
  })
}
