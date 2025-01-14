import { CommandNginx } from "./CommandNginx";

export interface HostingCommand {
  command: CommandNginx;
  date: Date;
  state: 'new' | 'inProgress' | 'success' | 'error';
  data: { [key: string]: any };
  batchId?: string;
  company?: string;
  project?: string;
  after?: {
    command: CommandNginx;
  };
}