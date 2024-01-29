import { PublishMethod } from "./PublishMethod"

export interface PublishMethodInternal extends PublishMethod {

  type: 'internal'

  label: string

}