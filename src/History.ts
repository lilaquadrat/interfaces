import { ObjectId } from "mongodb"
import { HistoryReason } from "./HistoryReason"

export interface History {

  history: {
    version: number
    parent: ObjectId
    reason: HistoryReason
    user: string
    app: string
    date: Date
    source: string
    origin?: 'member'
    update?: Date
    branchVersion?: number
    copySource?: ObjectId
    model: string
  }

  [key: string]: any;

}
