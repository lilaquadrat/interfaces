import { EditorSettings } from "./EditorSettings"
import { ModuleIndex } from "./ModuleIndex"
import { ModulePdf } from "./ModulePdf"

export interface Module {
    type: string
    id?: string
    uuid?: string
    position?: string
    layout?: string
    changed?: boolean
    variant: string[]
    index?: ModuleIndex
    pdf?: ModulePdf
    editor?: EditorSettings
  }