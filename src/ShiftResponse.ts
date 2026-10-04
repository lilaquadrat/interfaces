import type { Shift } from './Shift';
import type { ShiftPlanningViolation } from './ShiftPlanningViolation';
import type { ShiftWorkingTime } from './ShiftWorkingTime';

export interface ShiftResponse extends Shift {
  conflicts: Array<{ customer: string; shift: string }>;
  unavailableParticipantIds: string[];
  violations: ShiftPlanningViolation[];
  workingTime: ShiftWorkingTime[];
}
