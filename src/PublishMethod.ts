import { ObjectId } from "mongodb"
import { Content } from "./Content"
import { PublishContentGroup } from "./PublishContentGroup"

export interface PublishMethod {

  type: 'ftp' | 'webhook' | 'internal' | 'pdf' | 'email'

  active: boolean

  label: string

  availableForApps: string[]

  availableForContentGroups: PublishContentGroup[]

  contextData: ObjectId[]

  affectedStates?: Content['state'][]

  [key: string]: any

}