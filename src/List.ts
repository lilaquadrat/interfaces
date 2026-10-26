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
  
  start?: string
  end?: string

  location?: string

  participants?: {
      max?: number
      confirmed?: number
      reserved?: number
      available?: number
      unique?: boolean
      addressRequired?: boolean
      totalPaid?: number
      /**
       * opt-in: when true a member may edit the structure answers of, and cancel,
       * their own list entry. absent/false means disabled.
       */
      selfService?: boolean
    }
  
    state: 'open' | 'closed' | 'waiting'
  
    agreements: Agreement[]
  
    categories?: ListCategory[]

    /**
     * Shift plan linked to this list for planning its participants; the referenced
     * plan must belong to the same company and project.
     */
    shiftPlan?: ObjectId

    /**
     * Name of the linked shift plan, resolved on read for display. Not persisted and
     * never sent on create/change; writes still use `shiftPlan`.
     */
    shiftPlanName?: string

    content?: ListContent

    emails?: EmailsContent[]
  }