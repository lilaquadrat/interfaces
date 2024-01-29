import { Tracker } from "./Tracker"

export interface TrackerInput extends Omit<Tracker, 'startTime' | 'endTime'> {

  startTime: string
  endTime: string
  user: string

}
