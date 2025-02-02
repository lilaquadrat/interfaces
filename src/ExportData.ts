export interface ExportData {
  company: string;
  project: string;
  created: number;
  files?: string[];
  filesize?: number;
  path?: string;
  metadata?: {
    createdAt?: string;
    company?: string;
    project?: string;
    selectedServices?: string[];
    statistics?: Record<string, number>;
  };
}