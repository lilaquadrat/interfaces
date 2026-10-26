import type { ObjectId } from 'mongodb';
import type { ShiftPlanningPolicyOverrides } from './ShiftPlanningPolicyOverrides';
import type { ShiftPlanWorkArea } from './ShiftPlanWorkArea';
import type { ShiftPlanWorkHours } from './ShiftPlanWorkHours';
import type { ListParticipants } from './ListParticipants';

export interface ShiftPlan {
  _id?: ObjectId;
  company: string;
  project: string;
  list?: ObjectId;
  name: string;
  timeZone: string;
  /** Publication state; documents created before the field existed read as `draft`. */
  state?: 'draft' | 'publish';
  settingsOverrides: ShiftPlanningPolicyOverrides;
  /** One entry per work area used by the plan; binds employee-list categories to that area's shifts. */
  workAreaCategories?: ShiftPlanWorkArea[];
  /** Participant state the selection filter defaults to; null means no default. */
  defaultParticipantState?: ListParticipants['state'] | null;
  /** Visible scheduling window for each day; absent means the full day. */
  workHours?: ShiftPlanWorkHours;
}