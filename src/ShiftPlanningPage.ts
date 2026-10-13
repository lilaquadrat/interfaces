import type { DatabaseQuerySites } from './DatabaseQuerySites';

export interface ShiftPlanningPage<T> {
  data: T[];
  all: number;
  count: number;
  sites: DatabaseQuerySites;
}