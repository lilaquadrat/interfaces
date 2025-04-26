import { ObjectId } from "mongodb";
import {Price} from "./Price";

export interface ListCategory {

  _id: ObjectId
  id: string
  name: string
  description?: string
  externalId?: string
  amount?: number
  disabled?: boolean
  price?: Price

}