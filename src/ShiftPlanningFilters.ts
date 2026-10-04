import type { ObjectId } from 'mongodb';

export interface ShiftPlanningFilters {
  from?: string;
  to?: string;
  page?: number;
  limit?: number;
  area?: ObjectId;
}
