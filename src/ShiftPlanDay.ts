import type { ObjectId } from 'mongodb';
import type { ShiftPlanArea } from './ShiftPlanArea';

export interface ShiftPlanDay {
  _id?: ObjectId;
  company: string;
  project: string;
  plan: ObjectId;
  date: string;
  name?: string;
  areas?: ShiftPlanArea[];
}