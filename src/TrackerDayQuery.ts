import type { TrackerUserQuery } from './TrackerUserQuery';

export interface TrackerDayQuery extends TrackerUserQuery {
  timeTrackingProject?: string;
}
