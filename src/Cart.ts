import { CartItem } from "./CartItem"
import { ObjectIdString } from "./ObjectIdString"

export interface Cart {

    items?: CartItem[]

    state: 'open' | 'closed' | 'checkout'

    company: string
    project: string

    attributes?: {
        [key: string]: string
    }

    modified?: Date

    checkoutUrl?: string

    payment: ObjectIdString
    
}