export interface ShiftFillPolicy {
  /** Use matching people as the target instead of total staffing headcount. */
  matchingGate: boolean;
  /** Treat break-rule violations as blocking; coverage leaves breaks to the planner. */
  breaksBlocking: boolean;
  /** Stop at the first shift that cannot be filled. */
  stopOnUnfillable: boolean;
}
