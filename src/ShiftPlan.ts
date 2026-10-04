import type { ObjectId } from 'mongodb';
import type { ShiftPlanDay } from './ShiftPlanDay';
import type { ShiftPlanArea } from './ShiftPlanArea';
import type { ShiftPlanningPolicyOverrides } from './ShiftPlanningPolicyOverrides';

export interface ShiftPlan {
  _id?: ObjectId;
  company: string;
  project: string;
  list: ObjectId;
  name: string;
  timeZone: string;
  days: ShiftPlanDay[];
  areas: ShiftPlanArea[];
  settingsOverrides: ShiftPlanningPolicyOverrides;
}
