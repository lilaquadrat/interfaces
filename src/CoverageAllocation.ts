import type { ShiftCoverage } from './ShiftCoverage';

/** Coverage only needs the counts; kept so existing callers and types stay unchanged. */
export interface CoverageAllocation {
  coverage: ShiftCoverage[];
  fillable: boolean;
  complete: boolean;
}
