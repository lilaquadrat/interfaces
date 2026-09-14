export interface ChatSupportContext {
  company?: string;
  project?: string;
  url?: string;
  pageTitle?: string;
  appVersion?: string;
  browser?: {
    name?: string;
    version?: string;
  };
  os?: {
    name?: string;
    version?: string;
  };
  screen?: {
    width?: number;
    height?: number;
    pixelRatio?: number;
  };
  viewport?: {
    width?: number;
    height?: number;
  };
  locale?: string;
  timezone?: string;
  userAgent?: string;
}
