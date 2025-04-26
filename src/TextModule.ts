import { ListLink } from "./ListLink"
import { ListString } from "./ListString"
import { Module } from "./Module"

export interface TextModule extends Module {
  type: "text-module" | `${string}-text-module`
  headline?: string
  subline?: string
  intro?: string
  text?: string[]
  list?: ListString
  links?: ListLink
}