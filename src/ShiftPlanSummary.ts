import type { ObjectId } from 'mongodb';

/** Lightweight plan row for lists and pickers; the plan detail endpoint returns the full ShiftPlanResponse. */
export interface ShiftPlanSummary {
  _id?: ObjectId;
  name: string;
  /** Publication state, defaulted to `draft` for documents saved before the field existed. */
  state: 'draft' | 'publish';
  /** Linked employee list identity, resolved to its name; null when the plan has no list. */
  list: { _id: ObjectId; name: string } | null;
  /** Total days of the plan; the list endpoint does not ship the day documents. */
  dayCount: number;
  /** Total shifts of the plan, independently of the list's date filter. */
  shiftCount: number;
}
