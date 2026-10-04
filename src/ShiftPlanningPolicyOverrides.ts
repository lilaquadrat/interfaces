import type { ShiftPlanningPolicy } from './ShiftPlanningPolicy';

// An omitted group inherits; an explicit group replaces the company's group completely.
export type ShiftPlanningPolicyOverrides = Partial<ShiftPlanningPolicy>;
