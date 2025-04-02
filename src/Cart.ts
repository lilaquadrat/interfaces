import { ObjectId } from "mongodb"
import { CartItem } from "./CartItem"
export interface Cart {

    items?: CartItem[]

    state: 'open' | 'closed' | 'checkout' | 'finished'

    company: string
    project: string

    attributes?: {
        [key: string]: string
    }

    modified?: Date

    checkoutUrl?: string

    payment?: ObjectId
    
}