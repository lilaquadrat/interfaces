/** Date filters are local planning dates; shift filters instead describe UTC instants. */
export interface ShiftPlanFilters {
  from?: string;
  to?: string;
  page?: number;
  limit?: number;
}
