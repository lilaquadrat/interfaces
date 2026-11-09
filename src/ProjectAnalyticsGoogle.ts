export interface ProjectAnalyticsGoogle {

    provider: 'googleAnalytics'

    /**
     * the GA4 measurement id, e.g. `G-XXXXXXXXXX`.
     */
    measurementId: string

    /**
     * send hits without cookies until the visitor grants consent.
     */
    requireConsent?: boolean

}