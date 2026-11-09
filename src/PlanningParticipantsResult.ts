import type { ShiftScopeCoverage } from './ShiftScopeCoverage';
import type { ListPlanningParticipant } from './ListPlanningParticipant';

/**
 * Candidate page for a shift or work area, or coverage for a day or plan. `data` is empty when
 * `coverage` is present.
 */
export interface PlanningParticipantsResult {
  all: number;
  count: number;
  data: ListPlanningParticipant[];
  coverage?: ShiftScopeCoverage;
}
