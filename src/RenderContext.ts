import {Content} from './Content';

export interface RenderContext {
  url?: string
  data?: Content
  layout?: Content
  title?: string
  description?: string
  settings?: Record<string, unknown>
  translation?: Record<string, string>
  tags?: string[]
  app?: string
  css?: string
  cdn?: string
  renderTarget?: 'pdf' | 'web'
}
