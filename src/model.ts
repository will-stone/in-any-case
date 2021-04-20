export type TChanger = (string: string) => string

export interface Case {
  commandId: string
  changer: TChanger
  testInput: string
  testOutput: string
}
