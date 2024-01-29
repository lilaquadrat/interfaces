import { ObjectId } from "mongodb";

export interface Secret {
  _id?: ObjectId;

  company: string
  project?: string
  affectedApp?: string
  model?: string
  id: string
  key: string
}
