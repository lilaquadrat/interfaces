import type { ObjectId } from 'mongodb';
import type { ShiftAssignment } from './ShiftAssignment';
import type { StructureCondition } from './StructureCondition';

export interface Shift {
  _id?: ObjectId;
  company: string;
  project: string;
  list?: ObjectId;
  plan: ObjectId;
  day: ObjectId;
  area: ObjectId;
  title: string;
  start: string;
  end: string;
  structures?: StructureCondition[];
  requiredPeople?: number;
  matchingPeople?: number;
  assignments: ShiftAssignment[];
}