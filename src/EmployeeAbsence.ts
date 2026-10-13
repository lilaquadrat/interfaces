import type { ObjectId } from 'mongodb';

export interface EmployeeAbsence {
  _id?: ObjectId;
  company: string;
  project: string;
  customer: ObjectId;
  type: 'vacation' | 'sickness';
  start: string;
  end: string;
}
