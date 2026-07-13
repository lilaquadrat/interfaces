import { ObjectId } from 'mongodb';

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
  new?: boolean;
}
