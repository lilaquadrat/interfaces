import type { ShiftPlan } from './ShiftPlan';
import type { ShiftPlanDay } from './ShiftPlanDay';
import type { ShiftPlanningPolicy } from './ShiftPlanningPolicy';
import type { ShiftResponse } from './ShiftResponse';
import type { WorkArea } from './WorkArea';
import type { ListCategory } from './ListCategory';

export interface ShiftPlanResponse extends ShiftPlan {
  days: ShiftPlanDay[];
  effectiveSettings: ShiftPlanningPolicy | null;
  workAreas: WorkArea[];
  /** Categories of the linked employee list, for labelling the per-area category bindings. */
  categories?: ListCategory[];
  shifts?: ShiftResponse[];
}