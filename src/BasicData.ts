import { ObjectId } from 'mongodb';

export type BasicData<T> = T & {

  id?: string | number

  company?: string
  project?: string

  app?: string
  model?: string

  _id?: ObjectId

  history?: {
    version?: number
    source: string
    created?: Date
    updated?: Date
    additional?: any
  };

}