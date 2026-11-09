import type { ListParticipantMatch } from './ListParticipantMatch';
import type { ListParticipants } from './ListParticipants';
import type { ObjectId } from 'mongodb';

export interface ListPlanningParticipant {
  _id: ObjectId;
  category?: string;
  state: ListParticipants['state'];
  match: ListParticipantMatch & {
    /** Relative to the full filtered pool; tied-only pools share stage 4. */
    normalizedScore: 1 | 2 | 3 | 4;
  };
  user?: {
    _id: ObjectId;
    id?: string;
    name: string;
    email?: string;
  };
}
