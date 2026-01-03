import { Domain } from "./Domain";
import { Secret } from "./Secret";

export interface ProjectDomainWithSecret extends Omit<Domain, 'secret'> {
  company: string
  project: string
  secret: Secret
}
