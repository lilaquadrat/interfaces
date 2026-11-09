import type { ObjectId } from 'mongodb';

/** the counter document behind the `id` collection; not to be confused with `Id`, the generic id/data pair */
export interface IdCounter {
  _id: string;
  company: string
  project: string
  model: string
  app: string
  count: number
  initials?: string
  dynamicKey?: string | number | ObjectId
}
