import { ObjectId } from 'mongodb';
import type { ParticipantRole } from './ParticipantRole';
import type { ParticipantState } from './ParticipantState';
import type { Right } from './Right';

export interface Participant {
  _id?: ObjectId;
  conversation: ObjectId;
  user: string;
  state: ParticipantState;
  rights: Right[];
  lastReadId?: number;
  latestMessageId?: number;
  /**
   * the participant silenced this conversation for themselves. A pure notification
   * preference — delivery is untouched, muted members still receive every frame, the
   * client just stops making noise about them. Private to the owner of the doc: it is
   * never broadcast to the other participants.
   */
  muted?: boolean;
  /**
   * only set on support conversations, and only for the support team. It is what separates
   * the team from the customer on every read path, so the conversation's own bookkeeping
   * (system messages) can stay internal — see messages.service list().
   */
  role?: ParticipantRole;
  joinedAt?: string;
}
