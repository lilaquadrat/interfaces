import { DesignFile } from "./DesignFile"

export interface Design {
  company: string
  project: string
  files: DesignFile[]
  target: 'app' | 'server'
}