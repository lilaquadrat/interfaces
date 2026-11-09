import type { Conversation } from './Conversation';
import type { ParticipantUser } from './ParticipantUser';

/** A Conversation as sent to clients: participants enriched from ids to objects. */
export type ConversationResponse = Omit<Conversation, 'participants'> & { participants?: ParticipantUser[] };
