import type { ObjectId } from 'mongodb';
import type { ShiftPlanningFilters } from './ShiftPlanningFilters';

export interface MemberShiftFilters extends Omit<ShiftPlanningFilters, 'area'> {
  list?: ObjectId;
}
