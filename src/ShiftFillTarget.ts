import type { WithId } from 'mongodb';
import type { Shift } from './Shift';
import type { StructureCondition } from './StructureCondition';
import type { ShiftFillCandidate } from './ShiftFillCandidate';

export interface ShiftFillTarget {
  shift: WithId<Shift>;
  conditions: StructureCondition[];
  /** Ranked pool; unfit candidates are last but may still fill a shift as a fallback. */
  candidates: ShiftFillCandidate[];
}
