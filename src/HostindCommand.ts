import { Command } from "./Command";

export interface HostingCommand {
  target: 'nginx' | 'docker';
  command: Command<HostingCommand['target']>;
  date: Date;
  state: 'new' | 'inProgress' | 'success' | 'error';
  data: { [key: string]: any };
  batchId?: string;
  company?: string;
  project?: string;
  after?: {
    target: 'nginx' | 'docker';
    command: Command<HostingCommand['target']>;
  };
}