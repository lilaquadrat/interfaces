import type { ObjectId } from 'mongodb';
import type { ShiftPlanningPolicy } from './ShiftPlanningPolicy';

export interface ShiftPlanningSettings {
  _id?: ObjectId;
  company: string;
  project: string;
  settings: ShiftPlanningPolicy;
}
