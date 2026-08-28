import type { SupportStatus } from './Conversation';

export interface ConversationSla {
  conversation: string;
  status: SupportStatus;
  statusVersion: number;
  startedAt: string;
  endAt: string;
  stoppedAt?: string;
}
