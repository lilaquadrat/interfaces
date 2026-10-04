import type { ShiftPlanDay } from './ShiftPlanDay';
import type { ShiftPlanArea } from './ShiftPlanArea';
import type { ShiftPlanningPolicyOverrides } from './ShiftPlanningPolicyOverrides';

export interface ShiftPlanChangeInput {
  name: string;
  timeZone: string;
  days: ShiftPlanDay[];
  areas: ShiftPlanArea[];
  settingsOverrides: ShiftPlanningPolicyOverrides;
}
