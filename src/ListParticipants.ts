import { ObjectId } from "mongodb"
import {AgreementResponse} from "./AgreementResponse"

export interface ListParticipants {
  _id?: ObjectId

  list: ObjectId

  company: string
  project: string

  user: ObjectId

  /**
   * message from the participant
   */
  message?: string
  /**
   * internal note
   */
  note?: string

  category?: string

  explanation?: string

  /*
  enlisted = customer has joined the list, but the owner did not confirm it
  confirmed = customer has joined the list and the owner did confirm it or the list does not required confirmation
  reserved = It implies that the customer has successfully secured a place on the list and is awaiting further instructions or actions.
  waiting = customer has joined the list and waits on action from the owner
  blocked = customer is not part of the list and cant join it
  finalized = the list entry has fulfilled his purpose and no further action is required
  */
  state: 'unchecked' | 'notuseful' | 'confirmed' | 'enlisted' | 'reserved' | 'waiting' | 'blocked' | 'finalized'
  agreements: AgreementResponse[]

}