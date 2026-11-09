import type { Auth0ProjectSettings } from './Auth0ProjectSettings';

/**
 * auth0 settings the frontend needs to log in, taken from the project settings.
 */
export type WorkingAuthAuth0 = Pick<Auth0ProjectSettings, 'domain' | 'clientId' | 'audience'> & { provider: 'auth0' };
