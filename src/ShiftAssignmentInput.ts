import type { ObjectId } from 'mongodb';
import type { ShiftAssignmentBreak } from './ShiftAssignmentBreak';

export interface ShiftAssignmentInput {
  participant: ObjectId;
  breaks?: ShiftAssignmentBreak[];
}
