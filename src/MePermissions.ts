import { MePermissionsProject } from "./MePermissionsProject"
import { ScopeObject } from "./Scope"

export interface MePermissions {
    _id: string
    name: string
    scope: ScopeObject
    projects: MePermissionsProject[]
}