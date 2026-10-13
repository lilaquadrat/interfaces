import type { ObjectId } from 'mongodb';
import type { Address } from './Address';
import type { StructureCondition } from './StructureCondition';

export interface WorkArea {
  _id: ObjectId;
  id?: string;
  company: string;
  project: string;
  name: string;
  description?: string;
  location?: string;
  address?: Address;
  structures?: StructureCondition[];
}
