export interface ShiftPlanningViolation {
  customer: string;
  shift: string;
  rule: 'absence' | 'rest' | 'consecutiveDays' | 'breaks' | 'settingsMissing';
  relatedShift?: string;
  absence?: string;
}
