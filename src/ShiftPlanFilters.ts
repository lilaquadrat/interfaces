import type { ObjectId } from 'mongodb';

/** Date filters are local planning dates; shift filters instead describe UTC instants. */
export interface ShiftPlanFilters {
  list?: ObjectId;
  from?: string;
  to?: string;
  search?: string;
  site?: number;
}