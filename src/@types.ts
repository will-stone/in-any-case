type TChanger = (str: string) => string

interface ICase {
  commandId: string
  changer: TChanger
  testInput: string
  testOutput: string
}
