export interface License {

  id: string;
  name: string;

  description?: string;

  monthlyCost: number;
  oneTimeCost?: number;

  minimumContractMonths: number;
  cancellationPeriodDays: number;

  includesSupport: boolean;
  supportSla?: string;

  active: boolean;
  autoExtend: boolean;

  /** app ids that are included in this license */
  includedApps: string[];

  /** per-app usage limits, e.g. { editor: { pages: 10 }, media: { storageMb: 500 } } */
  limits?: Record<string, Record<string, number>>;

}
