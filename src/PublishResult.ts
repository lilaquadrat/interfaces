import { ObjectId } from 'mongodb';

export interface PublishResult {
  referenceId: ObjectId
  state: 'error' | 'success'
  error?: string
  message?: string
  id?: string
  name?: string
}
