import { Tracker } from "./Tracker";

export type TrackerCategories = 'call' | 'worktime' | 'all';

export interface TrackerData {
  count: number
  time: number
}

export interface TrackerStatistics {
  count: number,
  all: TrackerData,
  categories: {
    all?: Partial<Record<TrackerCategories, TrackerData>>
    byMonth?: Partial<Record<string, Partial<Record<TrackerCategories, TrackerData>>>>
    byDay?: Partial<Record<string, Partial<Record<TrackerCategories, TrackerData>>>>
  }
  start: Date,
  end: Date
}
export interface TrackerStatisticsDay {
  data: Tracker[],
  count: number,
  statistics: Partial<Record<TrackerCategories, TrackerData>>
  date: Date;
}
