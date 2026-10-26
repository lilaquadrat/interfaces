import type { TimeTrackingProject } from './TimeTrackingProject';

export type TimeTrackingProjectInput = Omit<TimeTrackingProject, 'company' | 'project'>;