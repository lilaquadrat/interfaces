import { ObjectId } from "mongodb";
import {Price} from "./Price";
import { PaymentProvider } from "./PaymentProvider";

export interface ListCategory {

  _id: ObjectId
  id: string
  name: string
  description?: string
  externalId?: string
  /**
   * request-only flag: creates the product at the given payment provider and stores
   * its id as externalId. never persisted.
   */
  createExternalProduct?: PaymentProvider['type']
  amount?: number
  disabled?: boolean
  price?: Price

}