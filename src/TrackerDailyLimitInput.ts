export interface TrackerDailyLimitInput {
  timeTrackingProject?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  currentTime?: number;
  /** the person an admin booked the entry for, the limit then counts that person instead of the admin */
  customer?: string;
}
