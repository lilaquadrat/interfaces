/**
 * Narrows a planning candidate pool by the plan's existing assignments: `all` keeps the whole list,
 * `assigned` keeps people already holding a place, `unassigned` keeps people holding none.
 */
export type PlanningShiftMembership = 'all' | 'assigned' | 'unassigned';