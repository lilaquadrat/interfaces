import type { EnvironmentAuthKeycloak } from './EnvironmentAuthKeycloak';

/**
 * keycloak settings the frontend needs to log in, taken from the environment.
 */
export type WorkingAuthKeycloak = Pick<EnvironmentAuthKeycloak, 'url' | 'realm' | 'clientId'> & { provider: 'keycloak' };
