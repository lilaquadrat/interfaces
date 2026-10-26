import { Tracker, TrackerGroup } from "./Tracker";

/** the two category values plans created before categories existed recorded time under */
export type TrackerCategories = 'call' | 'worktime' | 'all';

export interface TrackerData {
  count: number
  time: number
}

/**
 * the `categories` maps are keyed by the grouping of an entry: a shift id for shift bookings,
 * a category id (or the legacy `worktime`|`call`) otherwise
 */
export interface TrackerStatistics {
  count: number,
  all: TrackerData,
  categories: {
    all?: Partial<Record<TrackerGroup, TrackerData>>
    byMonth?: Partial<Record<string, Partial<Record<TrackerGroup, TrackerData>>>>
    byDay?: Partial<Record<string, Partial<Record<TrackerGroup, TrackerData>>>>
  }
  start: Date,
  end: Date
}
export interface TrackerStatisticsDay {
  data: Tracker[],
  count: number,
  statistics: Partial<Record<TrackerGroup, TrackerData>>
  date: Date;
}
