import type { ObjectId } from "mongodb"
import { ChildData } from "./ChildData"
import { GenericData } from "./GenericData"
import { ModuleGeneric } from "./ModuleGeneric"

export interface Content {
  id: string
  company: string
  project: string
  modules: ModuleGeneric[]
  tags?: string[]
  description?: string
  partial?: boolean
  layout?: boolean
  state: 'draft' | 'publish'
  language?: string
  settings: {
    url?: string
    useLayout?: ObjectId
    title?: string
    description?: string
    noSSR?: boolean
    noRendering?: boolean
    filename?: string[]
    mode?: string
  },
  pdf?: {
    filename?: string
    versioning?: boolean
  },
  childData?: ChildData
  genericData?: GenericData
}
