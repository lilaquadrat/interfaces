import { ObjectId } from 'mongodb';
import type { ConversationSla } from './ConversationSla';

export type SupportStatus = 'awaiting_agent' | 'awaiting_customer' | 'resolved';

export interface Conversation {
  _id?: ObjectId;
  name?: string;
  participantsHash?: string;
  participants?: string[];
  blocked?: string[];
  messagesCount?: number;
  messagesCountSystem?: number;
  createdAt?: string;
  lastActivity?: string;
  /** how the conversation was started. 'support' = backend attaches the support team. */
  operationMode?: 'default' | 'support';
  supportStatus?: SupportStatus;
  supportStatusUpdatedAt?: string;
  supportStatusVersion?: number;
  /** Current support SLA projection, joined at read time rather than stored on the conversation. */
  sla?: ConversationSla | null;
  new?: boolean;
}
