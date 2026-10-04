import type { ObjectId } from 'mongodb';
import type { ShiftPlanningArea } from './ShiftPlanningArea';
import type { ShiftAssignmentBreak } from './ShiftAssignmentBreak';

export interface MemberShift {
  _id: ObjectId;
  day: string;
  title: string;
  start: string;
  end: string;
  plan: { _id: ObjectId; name: string; timeZone: string };
  list: { _id: ObjectId; name: string };
  area: Pick<ShiftPlanningArea, '_id' | 'name' | 'description' | 'location' | 'address'>;
  breaks: ShiftAssignmentBreak[];
}
