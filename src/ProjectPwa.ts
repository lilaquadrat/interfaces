import { ProjectPwaIcon } from "./ProjectPwaIcon"

export interface ProjectPwa {

    /**
     * the web app manifest's `name` - the install name, not the app identifier.
     */
    name: string

    shortName?: string

    description?: string

    themeColor?: string

    backgroundColor?: string

    display?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser'

    orientation?: 'any' | 'natural' | 'landscape' | 'landscape-primary' | 'landscape-secondary'
        | 'portrait' | 'portrait-primary' | 'portrait-secondary'

    startUrl?: string

    scope?: string

    /**
     * the manifest `id`. usually `/` or a stable path that identifies the app.
     */
    id?: string

    categories?: string[]

    icons?: ProjectPwaIcon[]

}