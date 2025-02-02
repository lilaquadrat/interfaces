export interface ImportJob {
  /**
   * List of services to import
   */
  services: string[];

  /**
   * Current state of the import job
   */
  state: 'new' | 'running' | 'done' | 'failed';

  /**
   * Path to the import files
   */
  path: string;

  cdn?: string;

  /**
   * Target company for the import
   */
  targetCompany: string;

  /**
   * Target project for the import
   */
  targetProject: string;
}