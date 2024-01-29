export interface CustomerBase {

  type?: 'person' | 'company'

  id?: string

  email?: string
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