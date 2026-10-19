/**
 * Cheap coverage answer: whether every shift in scope can be staffed. Allocation stops at the
 * first shift that cannot be filled, so no per-shift detail is produced.
 */
export interface ShiftPlanCoverageSummary {
  fillable: boolean;
}