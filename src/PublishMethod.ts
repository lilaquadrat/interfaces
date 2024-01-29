import {Content} from "./Content"
import { PublishContentGroup } from "./PublishContentGroup"

export interface PublishMethod {

  type: 'ftp' | 'webhook' | 'internal' | 'pdf'

  active: boolean

  label: string

  availableForApps: string[]

  availableForContentGroups: PublishContentGroup[]

  affectedStates?: Content['state'][]

  [key: string]: any

}