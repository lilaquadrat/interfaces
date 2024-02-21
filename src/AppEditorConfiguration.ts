import { AppEditorTitleDescription } from "./AppEditorTitleDescription"

export interface AppEditorConfiguration {
    editorUrl: string
    breakpointTablet: string
    breakpointDesktop: string
    breakpointWide: string
    preloadImages: boolean
    title: AppEditorTitleDescription
    description: AppEditorTitleDescription
}