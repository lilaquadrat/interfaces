import { ObjectId } from "mongodb"
import { Certificate } from "./Certificate"

export interface Domain {

  domain: string

  // not required for system domains
  company?: string
  project?: string

  /**
   * this is the main domain, all other will be redirected to this
   */
  isMain?: boolean
  /**
   * this domain is the ``https://COMPANY-PROJECT.BASEHOSTINGDOMAIN`` that is generated on hosting creation
   */
  isDefault?: boolean

  active?: boolean

  /**
   * the domain is through dns validated
   */
  validated?: boolean

  /**
   * the secret that needs to be added to dns
   */
  secret?: ObjectId;

  attributes?: string[]

  certificate?: ObjectId | Partial<Certificate>

}