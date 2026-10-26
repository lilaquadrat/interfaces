import { Me } from "./Me"

/** the grouping key of a time entry: a shift id for shift bookings, a category id otherwise */
export type TrackerGroup = string

export interface Tracker {
  indexedKey?: string,
  description?: string,
  /** legacy `worktime`|`call` or a plan category id; absent when the entry books on a shift */
  category?: TrackerGroup,
  startTime?: Date,
  endTime?: Date,
  currentTime?: number
  mode: 'stopwatch' | 'timeframe',
  user?: Pick<Me, 'lastname' | 'prename' | 'id' | 'email'> | string
  company: string,
  project: string,
  timeTrackingProject: string,
  shift?: string,
  customer?: string,
}
