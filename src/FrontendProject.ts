import type { Project } from './Project';

/**
 * the project settings the frontend may see. secrets, publish data and
 * ai prompt settings are left out on purpose.
 */
export type FrontendProject = Pick<Project, 'company' | 'dynamic' | 'installable' | 'pwa' | 'login' | 'analytics'> & {

  /**
   * the id of the project, named like the project key on every other document.
   */
  project: Project['id']

  /**
   * the active payment provider of the project, named like it is used in the frontend.
   */
  paymentProvider?: Project['payment']

};
