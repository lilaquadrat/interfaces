import type { ObjectId } from 'mongodb';

/** A work area used by a plan, optionally bound to employee-list categories for its shifts. */
export interface ShiftPlanWorkArea {
  area: ObjectId;
  categoryIds?: ObjectId[];
}