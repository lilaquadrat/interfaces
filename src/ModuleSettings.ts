import { AvailableVariant, EditorMode } from "./AvailableVariant";

export interface ModuleSettings {
    variants: AvailableVariant[];
    editor: {
        modes: EditorMode[]
    }
}