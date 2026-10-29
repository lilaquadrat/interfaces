import type { TrackerUserQuery } from './TrackerUserQuery';

export interface TrackerStatisticsQuery extends TrackerUserQuery {
  month?: string;
  year?: string;
  timeTrackingProject?: string;
  wholePlan?: string;
}
