import { ObjectId } from "mongodb"
import { ListItem } from "./ListItem"

export interface Payment {
    company: string
    project: string
    test?: boolean
    body?: Record<string, any>
    provider: string
    state: 'waiting' | 'failed' | 'paid'
    amount: number
    currency: string
    customer: ObjectId
    webhook?: ObjectId
    items?: ListItem[]
    additionalData?: Record<string, string>
}