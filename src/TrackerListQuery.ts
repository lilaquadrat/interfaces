import type { TrackerUserQuery } from './TrackerUserQuery';

/** every other key is passed on to the list filter */
export interface TrackerListQuery extends TrackerUserQuery {
  [key: string]: string | undefined;
}
