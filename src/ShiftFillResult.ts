import type { WithId } from 'mongodb';
import type { Shift } from './Shift';
import type { ShiftCoverage } from './ShiftCoverage';

export interface ShiftFillResult {
  coverage: ShiftCoverage[];
  fillable: boolean;
  /** False when stop-on-unfillable ended the run before every target was evaluated. */
  complete: boolean;
  /** The targets after allocation; unchanged shifts keep their persisted assignments. */
  shifts: WithId<Shift>[];
}
