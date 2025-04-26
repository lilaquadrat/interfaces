import { ListLink } from "./ListLink"
import { ListString } from "./ListString"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface CookiesModule extends Module {
  type: "cookies-module" | `${string}-cookies-module`
  textblock?: Textblock
  list?: ListString
  links?: ListLink
}