import type { AppEditorConfiguration } from './AppEditorConfiguration';
import type { Cart } from './Cart';
import type { Content } from './Content';
import type { Customers } from './Customers';
import type { Endpoints } from './Endpoints';
import type { FrontendProject } from './FrontendProject';
import type { List } from './List';
import type { WorkingAuth } from './WorkingAuth';

/**
 * the context every render and the frontend share. the project and environment settings are flat on it.
 * the per render fields (content, layout, contextContent, recipient, list, cart) only exist during a server render.
 */
export interface WorkingContext extends FrontendProject {

  /**
   * the endpoints of the environment the project is rendered in.
   */
  endpoints: Endpoints

  /**
   * only set when the project has login enabled, the provider decides where the settings come from.
   */
  auth?: WorkingAuth

  /**
   * the content that is rendered, only set for a single render.
   */
  content?: Content

  layout?: Content

  /**
   * additional content selected in the publish method, e.g. for variables in the rendered content.
   */
  contextContent?: Content[]

  /**
   * the recipient of a mail or pdf publish.
   */
  recipient?: Customers

  /**
   * the list a publish was started for.
   */
  list?: List

  /**
   * the cart a payment-driven publish was started for.
   */
  cart?: Cart

  /**
   * editor settings without `editorUrl`, which only the studio editor needs.
   */
  editor?: Omit<AppEditorConfiguration, 'editorUrl'>

  tags?: string[]
  app?: string
  css?: string
  cdn?: string
  renderTarget?: 'pdf' | 'web'

}
