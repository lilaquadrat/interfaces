/**
 * the endpoints every environment provides and every project in it shares.
 */
export interface Endpoints {

    /**
     * base url of the studio api.
     */
    api: string

    /**
     * base url of the media api.
     */
    media: string

    /**
     * publicly reachable cdn base for assets.
     */
    cdn: string

    /**
     * cdn base for access protected files.
     */
    secure: string

}