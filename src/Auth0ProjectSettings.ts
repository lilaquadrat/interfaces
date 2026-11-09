export interface Auth0ProjectSettings {

    domain?: string

    /** public client id of the auth0 SPA application, not a secret */
    clientId?: string

    /** only needed when the login requests tokens for a custom api; the other auth0 client options are derived at render time and deliberately not stored */
    audience?: string

}
