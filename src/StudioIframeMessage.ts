import { AppEditorConfiguration } from "./AppEditorConfiguration"
import { Content } from "./Content"
import { EditorActiveModule } from "./EditorActiveModule"

export interface StudioIframeMessage {
  data:
  { type: 'studio-cookie-reset', data: undefined }
  | { type: 'studio-active', data: EditorActiveModule }
  | { type: 'studio-content', data: Content['modules'] }
  | { type: 'studio-editor-settings', data: Omit<Content, 'modules' | 'genericData' | 'childData'> }
  | { type: 'studio-settings', data: AppEditorConfiguration }

}
