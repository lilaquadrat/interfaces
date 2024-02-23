export interface AppHostingSettings {
    /**
     * redirects all configured domains to the main domain
     */
    redirectToMainDomain?: boolean
    /**
     * enables a catch all route to index.html if the file does not exist.
     * e.g. /content1 will end up at index.html if content1.html does not exist.
     */
    isApp?: boolean
}