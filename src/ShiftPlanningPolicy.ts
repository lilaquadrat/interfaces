export interface ShiftPlanningPolicy {
  daytime: { start: string; end: string };
  nighttime: { start: string; end: string };
  maximumConsecutiveWorkingDays: { enabled: boolean; days: number };
  maximumDailyWorkMinutes: { enabled: boolean; minutes: number };
  minimumRest: { enabled: boolean; minutes: number };
  breaks: {
    enabled: boolean;
    maximumContinuousWorkMinutes: number;
    minimumQualifyingBreakMinutes: number;
    requirements: Array<{ afterWorkMinutes: number; minimumTotalBreakMinutes: number }>;
  };
  absenceEnforcement: boolean;
}
