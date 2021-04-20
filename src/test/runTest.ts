/* eslint-disable no-console */
import * as path from 'path'
import { runTests } from 'vscode-test'

async function main(): Promise<void> {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '../../')

    console.log('extensionDevelopmentPath', extensionDevelopmentPath)

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './suite/index')

    console.log('extensionTestsPath', extensionTestsPath)

    // Download VS Code, unzip it and run the integration test
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: ['--disable-extensions'],
    })
  } catch {
    console.error('Failed to run tests')
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
  }
}

main()
