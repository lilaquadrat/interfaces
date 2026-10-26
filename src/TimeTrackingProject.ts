import type { TimeTrackingCategory } from './TimeTrackingCategory';
import type { TimeTrackingMode } from './TimeTrackingMode';

export interface TimeTrackingProject {

  id: string;
  company: string;
  project: string;
  name: string;
  description?: string;
  maximumHours?: number;
  maximumHoursPerDay?: number;
  modes: TimeTrackingMode;
  shiftPlan?: string;
  /** categories partition the budget; a plan that links a shift plan books on shifts and needs none */
  categories?: TimeTrackingCategory[];

}