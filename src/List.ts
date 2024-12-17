import { ObjectId } from "mongodb";
import {Agreement} from "./Agreement";
import { ListCategory } from "./ListCategory";
import { ListContent } from "./ListContent";
import { EmailsContent } from "./EmailsContent";

export interface List {
    _id?: ObjectId
  
    company: string
    project: string
  
    name: string
    description?: string
    mode: 'contact' | 'content' | 'reservation' | 'shopping'
  
    start?: Date
    end?: Date
  
    payment?: 'optional' | 'required' | 'free'
  
    participants?: {
      max?: number
      confirmed?: number
      reserved?: number
      available?: number
      unique?: boolean
      addressRequired?: boolean
      totalPaid?: number
    }
  
    state: 'open' | 'closed' | 'waiting'
  
    agreements: Agreement[]
  
    categories?: ListCategory[]

    content?: ListContent

    emails: EmailsContent
  }