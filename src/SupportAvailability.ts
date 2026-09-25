import type { SupportDay } from './SupportDay';

/**
 * Customer-facing support-hours schedule.
 *
 * Only the derived schedule is exposed (`supportDays`, `timeZone`, `responseTimeHours`), never the
 * raw Sla config. Whether support is open right now is derived by the client from the schedule
 * and its own clock.
 */
export interface SupportAvailability {
  responseTimeHours: number;
  timeZone: string;
  supportDays: SupportDay[];
}
