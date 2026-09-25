import { ObjectId } from 'mongodb';
import type { ConversationSla } from './ConversationSla';
import type { SupportAvailability } from './SupportAvailability';

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
  /**
   * Customer-facing support-hours summary (derived from the Sla config + server time), attached
   * at read time for support conversations. Absent for non-support conversations and when no
   * Sla configuration exists. Never carries the raw Sla fields.
   */
  supportAvailability?: SupportAvailability | null;
  new?: boolean;
}
