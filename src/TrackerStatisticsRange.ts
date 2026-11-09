export interface TrackerStatisticsRange {
  month?: number;
  year?: number;
  /** ignores month and year, the statistics then span every entry of the plan */
  wholePlan?: boolean;
}
