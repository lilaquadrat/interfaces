import { LinkGroupElement } from "./LinkGroupElement"
import { Module } from "./Module"
import { Picture } from "./Picture"

export interface NavigationModule extends Module {
  type: "navigation-module"
  name?: string
  picture?: Picture
  elements?: LinkGroupElement[]
}