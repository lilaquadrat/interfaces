import type { TimeTrackingProjectAllocation } from './TimeTrackingProjectAllocation';

export type TimeTrackingProjectAllocationInput = Omit<TimeTrackingProjectAllocation, 'company' | 'project'>;