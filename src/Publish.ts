import { ObjectId } from "mongodb"
import { PublishMethod } from "./PublishMethod"
import {PublishResult} from "./PublishResult"
import {PublishResultStatistics} from "./PublishResultStatistics"

export interface Publish {
    referenceId?: ObjectId
    method: ObjectId
  
    publishMethod?: {
      label: PublishMethod['label']
      type: PublishMethod['type']
    }
  
    contentGroup?: 'all' | 'sync' | 'category' | 'single'
  
    category?: string
  
    state:
    | 'new'
    | 'planned'
    | 'inQueue'
    | 'inProgress'
    | 'failed'
    | 'success'
    | 'partialSuccess'
    | 'noAction'
    | 'canceled'
  
    type: 'editor' | 'universal'
  
    planned?: Date
  
    result?: PublishResult[]
  
    statistics?: PublishResultStatistics
  
    appPublish?: string
  
    modelPublish?: string
  
    publishData?: {id: number | string, name?: string}

    recipient?: ObjectId;
  }