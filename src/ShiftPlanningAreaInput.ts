import type { ShiftPlanningArea } from './ShiftPlanningArea';

export type ShiftPlanningAreaInput = Omit<ShiftPlanningArea, '_id' | 'company' | 'project'>;
