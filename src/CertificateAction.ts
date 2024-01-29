import { ObjectId } from "mongodb"
import {CertificateActionResult} from "./CertificateActionResult"

export interface CertificateAction {
  company?: string
  project?: string

  type: 'domain' | 'wildcard'
  contentType: 'pem' | 'pfx'

  domains: string[]

  planned?: Date

  renew: boolean,

  results?: CertificateActionResult[]

  certificate?: ObjectId

  /** if forceFile is true, it gets saved as file in the storage account */
  forceFile?: boolean

  /** if saveInFault is true, it gets saved in the azure vault */
  saveInVault?: boolean

  /** indicated that this is the Nth retry */
  retryCount?: number

  /** indicated how often this action should be retried if failed */
  maxRetries?: number

  state:
  | 'new'
  | 'planned'
  | 'inQueue'
  | 'inProgress'
  | 'failed'
  | 'retry'
  | 'success'
  | 'canceled'

}