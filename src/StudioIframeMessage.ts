export interface StudioIframeMessage<T> {
  data: {
    type: 'studio-content' | 'studio-editor-settings' | 'studio-settings' | 'studio-active' | 'studio-cookie-reset'
    data: T
  }
}
