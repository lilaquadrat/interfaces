import { Picture } from "./Picture"

export interface MenuItemElement {
    title?: string
    description?: string
    price?: string
    properties?: string[]
    allergens?: string[]
    picture?: Picture
  }