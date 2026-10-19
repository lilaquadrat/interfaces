import type { ObjectId } from 'mongodb';

/**
 * The entity a planning query resolves its requirements for. `shift` and `workArea` score one
 * condition set; `day` and `plan` cover every shift in that scope.
 */
export interface PlanningScope {
  level: 'shift' | 'workArea' | 'day' | 'plan';
  /** shift level only; absent means the work area's conditions are used. */
  shift?: ObjectId;
  workArea?: ObjectId;
  day?: ObjectId;
  plan?: ObjectId;
}