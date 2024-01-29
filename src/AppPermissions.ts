import { Scope } from './Scope';

export interface AppPermissions {
  app: string;
  company: string;
  project: string;

  scope: Scope;
}
