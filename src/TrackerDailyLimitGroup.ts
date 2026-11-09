/** the entries of one plan, person and calendar day, summed up for the daily limit */
export interface TrackerDailyLimitGroup {
  timeTrackingProject?: string;
  customer?: string;
  startTime: Date;
  duration: number;
}
