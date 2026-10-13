import type { WorkArea } from './WorkArea';

export type WorkAreaInput = Omit<WorkArea, '_id' | 'company' | 'project'>;
