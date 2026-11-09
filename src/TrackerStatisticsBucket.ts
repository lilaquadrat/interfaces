/** the entries of one day and one group, summed up by the statistics aggregation */
export interface TrackerStatisticsBucket {
  _id: {
    /** `YYYY-MM-DD`, absent for an entry without a start */
    day?: string | null;
    /** the shift of a shift booking, the category otherwise; absent when an entry has neither */
    group?: string | null;
  };
  count: number;
  time: number;
  first?: Date | null;
  last?: Date | null;
}
