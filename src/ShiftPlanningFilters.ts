import type { ObjectId } from 'mongodb';

export interface ShiftPlanningFilters {
  from?: string;
  to?: string;
  site?: number;
  area?: ObjectId;
}