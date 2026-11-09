import {WorkingContext} from './WorkingContext';

export interface RenderContext extends WorkingContext {
  url?: string
  title?: string
  description?: string
  translation?: Record<string, string>
}
