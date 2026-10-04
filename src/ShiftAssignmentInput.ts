import type { ObjectId } from 'mongodb';
import type { ShiftAssignmentBreak } from './ShiftAssignmentBreak';

export interface ShiftAssignmentInput {
  participant: ObjectId;
  area: ObjectId;
  breaks?: ShiftAssignmentBreak[];
}
