import { ChildData } from "./ChildData"
import { CompatibleModule } from "./CompatibleModule"
import { GenericData } from "./GenericData"
import { ObjectIdString } from "./ObjectIdString"

export interface Content {
  id: string
  company: string
  project: string
  modules: CompatibleModule[]
  tags?: string[]
  /**
   * a description of the content which will be used as context for AI text generation
   */
  description?: string
  /**
   * a internal note for better understanding and identification of the content
   */
  note?: string
  partial?: boolean
  layout?: boolean
  state: 'draft' | 'publish'
  language?: string
  target?: 'browser' | 'mail'
  settings: {
    url?: string
    useLayout?: ObjectIdString
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
