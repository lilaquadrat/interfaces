import type { ObjectId } from 'mongodb';
import type { Address } from './Address';

export interface ShiftPlanningArea {
  _id: ObjectId;
  company: string;
  project: string;
  name: string;
  description?: string;
  location?: string;
  address?: Address;
}
