type TChanger = (str: string) => string

interface Case {
  commandId: string
  changer: TChanger
  testInput: string
  testOutput: string
}
