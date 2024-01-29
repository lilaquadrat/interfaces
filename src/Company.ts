import { CompanyAttribute } from "./CompanyAttribute"

export interface Company {

  id?: string
  name?: string

  streetNumber?: string
  zipcode?: string
  city?: string
  country?: string

  vat?: string
  register?: string

  legalRepresentative?: string

  internet?: string
  phone?: string

  description?: string

  partner?: string
  attributes?: CompanyAttribute[]
  tags?: string[]
  apps?: string[]

}