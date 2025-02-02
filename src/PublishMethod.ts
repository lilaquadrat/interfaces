import { Content } from "./Content"
import { PublishContentGroup } from "./PublishContentGroup"
import { ObjectIdString } from "./ObjectIdString"

export interface PublishMethod {

  type: 'ftp' | 'webhook' | 'internal' | 'pdf' | 'email'

  active: boolean

  label: string

  availableForApps: string[]

  availableForContentGroups: PublishContentGroup[]

  contextData: ObjectIdString[]

  affectedStates?: Content['state'][]

  [key: string]: any

}