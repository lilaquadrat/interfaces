import type { ObjectId, WithId } from 'mongodb';
import type { Shift } from './Shift';
import type { ShiftPlan } from './ShiftPlan';
import type { ShiftPlanningSettings } from './ShiftPlanningSettings';
import type { Structure } from './Structure';
import type { ShiftFillTarget } from './ShiftFillTarget';

/**
 * Everything a plan coverage run needs after the shared reads. Candidate pools are already ranked
 * and the ids are the people that must be resolved for reporting, so callers only add the schedule.
 */
export interface PlanCoveragePreparation {
  plan: WithId<ShiftPlan>;
  shifts: WithId<Shift>[];
  targets: ShiftFillTarget[];
  participantIds: ObjectId[];
  customerIds: ObjectId[];
  settings: ShiftPlanningSettings | null;
  listStructures: WithId<Structure>[];
  customerStructures: WithId<Structure>[];
}
