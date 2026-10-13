import type { ObjectId } from 'mongodb';
import type { ShiftPlanningFilters } from './ShiftPlanningFilters';

export interface EmployeeAbsenceFilters extends Omit<ShiftPlanningFilters, 'area'> {
  customer?: ObjectId;
}
