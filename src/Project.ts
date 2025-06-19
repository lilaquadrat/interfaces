import {Auth0ProjectSettings} from "./Auth0ProjectSettings"

export interface Project {

  name: string
  description?: string
  aiDescription?: string
  aiTone?: string
  license?: string
  company: string
  tags?: string[]
  apps?: string[]

  features?: string[]

  auth0?: Auth0ProjectSettings

}