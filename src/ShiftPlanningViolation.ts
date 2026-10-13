export interface ShiftPlanningViolation {
  customer: string;
  shift: string;
  rule: 'absence' | 'rest' | 'consecutiveDays' | 'dailyHours' | 'breaks' | 'overlap' | 'settingsMissing';
  relatedShift?: string;
  absence?: string;
}
