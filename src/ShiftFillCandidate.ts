import type { ObjectId } from 'mongodb';
import type { ShiftAssignmentBreak } from './ShiftAssignmentBreak';

export interface ShiftFillCandidate {
  participant: ObjectId;
  customer: ObjectId;
  /** The candidate fulfils the shift's required/forbidden constraints. */
  matching: boolean;
  /** Absolute break times to carry into the assignment; coverage leaves them to the planner. */
  breaks?: ShiftAssignmentBreak[];
}
