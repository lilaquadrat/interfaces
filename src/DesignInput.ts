import { DesignFile } from "./DesignFile"

/**
 * writes a design into the caller's project; a project's first design falls back to
 * the `default` id and name, so both stay optional
 */
export interface DesignInput {
  id?: string
  name?: string
  description?: string
  target: 'app' | 'server'
  files: DesignFile[]
}
