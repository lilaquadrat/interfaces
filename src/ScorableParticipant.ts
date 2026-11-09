import type { WithStructures } from './WithStructures';

/** Shift and list participants both carry s-* answers, their own structures and the customer's. */
export interface ScorableParticipant extends WithStructures {
  user?: WithStructures;
}
