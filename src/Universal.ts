import { ObjectId } from 'mongodb';

export interface Universal {
  [key: string]: unknown;
  id?: string | number;
  _id?: ObjectId;
  referenceId?: ObjectId;
  company: string;
}
