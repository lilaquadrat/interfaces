import type { Shift } from './Shift';
import type { ShiftParticipant } from './ShiftParticipant';
import type { ShiftPlanningViolation } from './ShiftPlanningViolation';
import type { ShiftWorkingTime } from './ShiftWorkingTime';

export interface ShiftResponse extends Shift {
  participants: ShiftParticipant[];
  unavailableParticipantIds: string[];
  violations: ShiftPlanningViolation[];
  workingTime: ShiftWorkingTime[];
}