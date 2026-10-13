import type { WithId } from 'mongodb';
import type { CustomerPerson } from './CustomerPerson';
import type { EmployeeAbsence } from './EmployeeAbsence';
import type { ListParticipantWithCustomerAndPayment } from './ListParticipantWithUser';
import type { ListParticipants } from './ListParticipants';
import type { Shift } from './Shift';
import type { ShiftPlan } from './ShiftPlan';
import type { ShiftPlanningPolicy } from './ShiftPlanningPolicy';

/** Diagnostic snapshots contain internal data; member responses use a separate restricted projection. */
export interface ShiftReportContext {
  schedules: WithId<Shift>[];
  plans: WithId<ShiftPlan>[];
  settings: ShiftPlanningPolicy | undefined;
  absences: WithId<EmployeeAbsence>[];
  participants: WithId<ListParticipants>[];
  participantDetails: ListParticipantWithCustomerAndPayment[];
  customers: WithId<CustomerPerson>[];
}