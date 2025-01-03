import Auth0ProjectSettings from "./Auth0ProjectSettings"
import ShopifyProjectSettings from "./ShopifyProjectSettings"

export interface Project {

  name: string
  description?: string
  license?: string
  company: string
  tags?: string[]
  apps?: string[]

  auth0?: Auth0ProjectSettings
  shopify?: ShopifyProjectSettings

}