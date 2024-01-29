import { CustomerBase } from "./CustomerBase"

export interface CustomerPerson extends CustomerBase {

  type?: 'person'

  prename: string

  // birthday?: Date
  gender?: 'm' | 'w' | 'd'

}