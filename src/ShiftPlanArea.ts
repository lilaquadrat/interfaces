import type { ObjectId } from 'mongodb';

/** A work area placed on a plan day; its shifts are scheduled in the resulting column. */
export interface ShiftPlanArea {
  area: ObjectId;
}