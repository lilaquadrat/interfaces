import type { ObjectId } from 'mongodb';
import type { ShiftCoverage } from './ShiftCoverage';

/** Coverage of a day or a whole plan; only the plan's own shifts are compared. */
export interface ShiftScopeCoverage {
  level: 'day' | 'plan';
  plan: ObjectId;
  shifts: ShiftCoverage[];
  totalShifts: number;
  fillableShifts: number;
  fillable: boolean;
}