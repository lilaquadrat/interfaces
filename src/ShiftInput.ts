import type { ObjectId } from 'mongodb';
import type { StructureCondition } from './StructureCondition';

export interface ShiftInput {
  day: ObjectId;
  area: ObjectId;
  title: string;
  start: string;
  end: string;
  structures?: StructureCondition[];
  requiredPeople?: number;
  matchingPeople?: number;
}