import { ListLink } from "./ListLink"
import { ListString } from "./ListString"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface LocationModule extends Module {
  type: 'location-module'
  textblock?: Textblock
  map?: string
  list?: ListString
  links?: ListLink
}