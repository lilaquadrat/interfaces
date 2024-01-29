import { CustomerBase } from "./CustomerBase"

export interface CustomerCompany extends CustomerBase {

  type?: 'company'

  vat?: string
  register?: string

  legalRepresentative?: string
  internet?: string

}
