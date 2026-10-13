import type { ShiftPlanArea } from './ShiftPlanArea';

export interface ShiftPlanDayInput {
  date: string;
  name?: string;
  areas?: ShiftPlanArea[];
}