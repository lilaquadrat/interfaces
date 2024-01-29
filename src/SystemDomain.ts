import { Domain } from "./Domain";
export interface SystemDomain extends Omit<Domain, 'company' | 'project'> { }