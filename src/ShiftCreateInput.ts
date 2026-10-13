import type { ShiftInput } from './ShiftInput';
import type { ShiftAssignmentInput } from './ShiftAssignmentInput';

export interface ShiftCreateInput extends ShiftInput {
  assignments?: ShiftAssignmentInput[];
}
