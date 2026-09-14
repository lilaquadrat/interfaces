import { ObjectIdString } from './ObjectIdString';
import { ChatMessageAttachment } from './ChatMessageAttachment';
import { ChatMessageMetadata } from './ChatMessageMetadata';

export interface ChatMessage {
  type: 'message:add';
  conversation: ObjectIdString;
  message: string;
  clientMessageId?: string;
  metadata?: ChatMessageMetadata;
  attachments?: ChatMessageAttachment[];
}
