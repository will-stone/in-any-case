import * as path from 'path'
import { runTests } from 'vscode-test'

async function main(): Promise<void> {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '../../')

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './suite/index')

    // Download VS Code, unzip it and run the integration test
    await runTests({ extensionDevelopmentPath, extensionTestsPath })
  } catch {
    // eslint-disable-next-line no-console
    console.error('Failed to run tests')
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
  }
}

main()
