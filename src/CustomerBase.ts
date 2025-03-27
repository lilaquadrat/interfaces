import { WithStructures } from "./WithStructures"

export interface CustomerBase extends WithStructures {

  type?: 'person' | 'company'

  id?: string

  email?: string

  emailConfirmed?: boolean

  emailConfirmationCode?: string
  /** for better sorting name will be used as lastname for persons */
  name: string

  osm_id?: number
  street?: string
  streetNumber?: string
  zipcode?: string
  city?: string
  country?: string
  addressAddition?: string

  phone?: string

  note?: string

  tags?: string[]

  company: string

}