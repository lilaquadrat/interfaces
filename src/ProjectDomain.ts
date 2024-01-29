import { Domain } from "./Domain";

export interface ProjectDomain extends Domain {
  company: string,
  project: string
}
