import { SortDirection } from "mongodb"

export interface SkipLimitSort { 
    skip: number
    limit: number
    sort: { [key: string]: SortDirection }
}