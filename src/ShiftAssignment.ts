import type { ObjectId } from 'mongodb';
import type { ShiftAssignmentBreak } from './ShiftAssignmentBreak';

export interface ShiftAssignment {
  participant: ObjectId;
  customer: ObjectId;
  breaks: ShiftAssignmentBreak[];
}
