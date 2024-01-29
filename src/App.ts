export interface App {

  id: string
  name: string;

  universal: boolean
  description?: string

  /** list of models that are used in this app. needed for model based permissions */
  models: string[]

  icon: string

  companyAvailable: boolean
  projectAvailable: boolean

  attributes?: 'previewInternal'|'previewPublic'|'paid'[]

  available?: 'unavailable' | 'internal' | 'preview' | 'public';

}
