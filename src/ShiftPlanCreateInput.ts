import type { ObjectId } from 'mongodb';
import type { ShiftPlanningPolicyOverrides } from './ShiftPlanningPolicyOverrides';
import type { ShiftPlanWorkArea } from './ShiftPlanWorkArea';
import type { ShiftPlanWorkHours } from './ShiftPlanWorkHours';
import type { ListParticipants } from './ListParticipants';

export interface ShiftPlanCreateInput {
  list?: ObjectId;
  name: string;
  timeZone: string;
  settingsOverrides?: ShiftPlanningPolicyOverrides;
  workAreaCategories?: ShiftPlanWorkArea[];
  defaultParticipantState?: ListParticipants['state'] | null;
  workHours?: ShiftPlanWorkHours;
}