import type { ObjectId } from 'mongodb';
import type { CustomerMinimal } from './CustomerMinimal';
import type { WithStructures } from './WithStructures';

export interface ShiftParticipant extends WithStructures {
  participant: ObjectId;
  customer: ObjectId;
  name: string;
  email: string;
  /**
   * The assigned customer, carrying the customer's own structure answers and definitions
   * so a shift's conditions can be evaluated client-side.
   */
  user?: CustomerMinimal & WithStructures;
}