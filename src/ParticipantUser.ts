import type { ParticipantRole } from './ParticipantRole';

/**
 * Enriched participant shape returned to clients. Conversations are *stored* with
 * `participants: string[]` (user ids); read/emit paths enrich each id to this object
 * via the `me` collection. Unresolvable ids (e.g. external IdP subs with no `me`
 * record) degrade to just `{ id }` so no participant is ever dropped.
 */
export interface ParticipantUser {
  id: string;
  prename?: string;
  lastname?: string;
  /** only included by the staff-authorised support conversation list */
  email?: string;
  /** presence: last proof of life, ISO string. Absent for a user who never connected. */
  lastSeen?: string;
  /** presence: derived from the stored flag AND lastSeen freshness, see presence.service */
  online?: boolean;
  /**
   * support conversations only, and only on the paths that carry the roles: the agent-side list
   * pipeline (support-conversations.service) and the `conversation:new` frame. It is what lets a
   * client name the counterpart itself — the customer is the participant whose role is not
   * 'agent'. `null` says "not a member of the support team", which on a pre-f2fdc27 legacy row is
   * every participant, so none of them is distinguishable — see supportCustomer.ts. Absent means
   * the path this object came from does not carry roles at all.
   */
  role?: ParticipantRole | null;
}
