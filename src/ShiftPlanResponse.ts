import type { ShiftPlan } from './ShiftPlan';
import type { ShiftPlanningPolicy } from './ShiftPlanningPolicy';
import type { ShiftPlanningArea } from './ShiftPlanningArea';

export interface ShiftPlanResponse extends ShiftPlan {
  effectiveSettings: ShiftPlanningPolicy | null;
  workAreas: ShiftPlanningArea[];
}
