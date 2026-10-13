import { ObjectId } from "mongodb";

/**
 * marks the newest history entry a user has seen for one scope (e.g. the participants of a single list).
 * the number of unread entries is derived from this marker instead of being stored, so it can not go stale.
 */
export interface HistorySeen {
  user: string
  company: string
  project?: string
  model: string
  /** identifies the watched subset of a model, e.g. the id of a list. */
  scope: string
  lastSeenId: ObjectId
  seenAt: Date
}
