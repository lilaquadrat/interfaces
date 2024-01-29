import { Scope } from "./Scope"

export interface PermissionsWithScope {

  user?: string
  app?: string
  company?: string
  project?: string
  scope?: Scope

}
