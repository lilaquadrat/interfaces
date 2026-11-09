import { EnvironmentAuthKeycloak } from "./EnvironmentAuthKeycloak"

/**
 * the authentication provider of an environment, discriminated by `type`.
 * auth0 is planned as a second variant.
 */
export type EnvironmentAuth = EnvironmentAuthKeycloak