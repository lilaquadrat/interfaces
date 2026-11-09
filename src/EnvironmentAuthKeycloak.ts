/**
 * self hosted keycloak as the authentication provider of an environment.
 */
export interface EnvironmentAuthKeycloak {

    type: 'keycloak'

    /**
     * base url of the keycloak server, e.g. `https://auth.lilaquadrat.dev`.
     */
    url: string

    /**
     * keycloak realm, e.g. `studio`.
     */
    realm: string

    /**
     * public client id used by the browser. shared by every project in the
     * environment unless a project overrides it.
     */
    clientId: string

}