import type { WorkingAuthAuth0 } from './WorkingAuthAuth0';
import type { WorkingAuthKeycloak } from './WorkingAuthKeycloak';

export type WorkingAuth = WorkingAuthKeycloak | WorkingAuthAuth0;
