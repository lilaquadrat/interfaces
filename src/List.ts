import { ObjectId } from "mongodb";
import {Agreement} from "./Agreement";
import { ListCategory } from "./ListCategory";

export interface List {
    _id?: ObjectId;
  
    company: string
    project: string
  
    name: string
    description?: string
    mode: 'contact' | 'content' | 'reservation'
  
    start?: Date
    end?: Date
  
    payment: 'optional' | 'required' | 'free'
  
    participants?: {
      max?: number
      confirmed?: number
      reserved?: number
      available?: number
      unique?: boolean
      addressRequired?: boolean
    }
  
    state: 'open' | 'closed' | 'waiting'
  
    agreements: Agreement[]
  
    categories: ListCategory[]
  }