import type { EmployeeAbsence } from './EmployeeAbsence';

export type EmployeeAbsenceInput = Omit<EmployeeAbsence, '_id' | 'company'>;
