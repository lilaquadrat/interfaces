import {Auth0ProjectSettings} from "./Auth0ProjectSettings"
import {ProjectAnalytics} from "./ProjectAnalytics"
import {ProjectHead} from "./ProjectHead"
import {ProjectLogin} from "./ProjectLogin"
import {ProjectPayment} from "./ProjectPayment"
import {ProjectPwa} from "./ProjectPwa"
import {ProjectDesign} from "./ProjectDesign"

export interface Project {

  id: string
  name: string
  description?: string
  aiDescription?: string
  aiTone?: string
  license?: string[]
  company: string
  tags?: string[]
  apps?: string[]
  attributes?: string[]

  features?: string[]

  /**
   * the design the project renders with: a real design document in (company, project, id).
   */
  design?: ProjectDesign

  auth0?: Auth0ProjectSettings

  /**
   * this project behaves as an app: dynamic routes and client side navigation.
   * rendered as `app` in the frontend config.
   */
  dynamic?: boolean

  /**
   * the app can be installed, which is what makes the pwa settings meaningful.
   * only set when `app` is on.
   */
  installable?: boolean

  payment?: ProjectPayment

  pwa?: ProjectPwa

  head?: ProjectHead

  /**
   * users can register and log in; the provider decides between the internal
   * auth and auth0. only set when `app` is on.
   */
  login?: ProjectLogin

  analytics?: ProjectAnalytics

}