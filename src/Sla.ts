import { SupportDay } from './SupportDay';

export interface Sla {
  company: string;
  providesSupport: boolean;
  responseTimeHours: number;
  timeZone: string;
  supportDays: SupportDay[];
}
