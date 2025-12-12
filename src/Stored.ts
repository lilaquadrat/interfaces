import { ObjectId } from "mongodb"

/**
 * the passed data comes from mongodb and has a _id
 */
export type Stored<T> = T & {

  _id: ObjectId

}

