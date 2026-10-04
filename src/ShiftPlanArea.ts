import type { ObjectId } from 'mongodb';

/** Category suggestions depend on the plan's employee list, even when departments share an area. */
export interface ShiftPlanArea {
  area: ObjectId;
  categoryIds: ObjectId[];
}
