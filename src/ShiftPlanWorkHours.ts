/** Working hours a plan is scheduled within; rendered as the day's visible window. Absent means the full day (`0`–`24`). */
export interface ShiftPlanWorkHours {
  start: number;
  end: number;
}