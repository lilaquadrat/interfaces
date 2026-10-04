import type { ShiftPlanningProjectOptions } from './ShiftPlanningProjectOptions';

export type ShiftPlanningCompanyOptions = Pick<ShiftPlanningProjectOptions, 'user' | 'app' | 'company'>;
