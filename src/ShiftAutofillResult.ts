import type { ObjectId } from 'mongodb';

export interface ShiftAutofillResult {
  shift: ObjectId;
  /** Assignments anchor list entries rather than customer records. */
  users: ObjectId[];
}
