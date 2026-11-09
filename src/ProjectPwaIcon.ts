export interface ProjectPwaIcon {

    /**
     * path to the icon file, relative to the app origin or absolute.
     */
    src: string

    /**
     * space separated list, e.g. `192x192` or `any`.
     */
    sizes: string

    type?: string

    /**
     * space separated list of `any`, `maskable` or `monochrome`.
     */
    purpose?: string

}