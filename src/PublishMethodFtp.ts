import { PublishMethod } from "./PublishMethod"

export interface PublishMethodFtp extends PublishMethod {

  type: 'ftp'

  username: string

  password: string

  host: string

  port: number

  mode: 'active' | 'passive'

}