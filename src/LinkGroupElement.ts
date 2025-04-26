import { Link } from "./Link"

export interface LinkGroupElement {
    text?: string
    event?: string
    link?: string
    icon?: string
    classes?: string[]
    attributes?: string[]
    variant?: string[]
    external?: boolean
    links?: Link[]
  }
  