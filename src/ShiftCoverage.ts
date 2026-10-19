import type { ObjectId } from 'mongodb';

/** Whether the linked employee list can staff one shift, respecting the plan's rules. */
export interface ShiftCoverage {
  shift: ObjectId;
  title: string;
  start: string;
  end: string;
  requiredPeople: number;
  matchingPeople: number;
  /** People assigned after the coverage allocation, including existing assignments. */
  assigned: number;
  /** Matching people after the read-only allocation; omitted by older servers and staffing coverage. */
  matching?: number;
  fillable: boolean;
}
