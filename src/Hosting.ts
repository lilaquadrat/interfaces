import { AppHostingSettings } from "./AppHostingSettings";

export interface Hosting extends AppHostingSettings {
  project: string;
  company: string;

  active?: boolean;

  port?: number;
}
