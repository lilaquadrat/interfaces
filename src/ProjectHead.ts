import { MediaApp } from "./MediaApp"

export interface ProjectHead {

    /**
     * `<meta name="theme-color">` content. stays a plain string.
     */
    themeColor?: string

    /**
     * selected media file, used as `<link rel="icon" sizes="32x32">`
     */
    favicon?: MediaApp

    /**
     * selected media file, used as `<link rel="icon" type="image/svg+xml">`
     */
    icon?: MediaApp

    /**
     * selected media file, used as `<link rel="apple-touch-icon" sizes="180x180">`
     */
    appleTouchIcon?: MediaApp

}