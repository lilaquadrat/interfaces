import { ObjectId } from "mongodb"
import { ListItem } from "./ListItem"
import { CustomerMinimal } from "./CustomerMinimal"

export interface PaymentWithCustomer {
    company: string
    project: string
    test?: boolean
    body?: Record<string, any>
    provider: string
    state: 'waiting' | 'failed' | 'paid'
    amount: number
    currency: string
    customer: CustomerMinimal
    webhook?: ObjectId
    items?: ListItem[]
}