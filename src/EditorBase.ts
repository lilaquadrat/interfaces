export interface EditorBase {
  company: string
  project: string
  type: 'app' | 'server'
  date: Date
  custom?: boolean
  version: string
}