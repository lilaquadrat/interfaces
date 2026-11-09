import type { ObjectId, WithId } from 'mongodb';
import type { Shift } from './Shift';
import type { PlanCoveragePreparation } from './PlanCoveragePreparation';

export interface ShiftReportContextOptions {
  replacement?: WithId<Shift>;
  plan?: ObjectId;
  schedules?: WithId<Shift>[];
  preparation?: PlanCoveragePreparation;
}
