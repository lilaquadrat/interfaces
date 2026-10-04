import type { ObjectId } from 'mongodb';
import type { ShiftAssignment } from './ShiftAssignment';

export interface Shift {
  _id?: ObjectId;
  company: string;
  project: string;
  list: ObjectId;
  plan: ObjectId;
  day: string;
  title: string;
  start: string;
  end: string;
  assignments: ShiftAssignment[];
}
