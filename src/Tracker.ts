import { Me } from "./Me"
import { TrackerCategories } from "./TrackerStatistics"

export interface Tracker {
  indexedKey?: string,
  description?: string,
  category?: TrackerCategories,
  startTime?: Date,
  endTime?: Date,
  currentTime?: number
  mode: 'stopwatch' | 'timeframe',
  user?: Pick<Me, 'lastname' | 'prename' | 'id' | 'email'> | string
  company: string,
  project: string
}
