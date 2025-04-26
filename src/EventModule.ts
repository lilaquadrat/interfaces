import { GenericData } from "./GenericData"
import { Link } from "./Link"
import { ListLink } from "./ListLink"
import { ListString } from "./ListString"
import { Media } from "./Media"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface EventModule extends Module {
  type: "event-module" | `${string}-event-module`
  textblock?: Textblock
  artist?: string
  name?: string
  location?: string
  list?: ListString
  links?: ListLink
  callToAction?: Link
  genericData?: GenericData
  start?: Date
  end?: Date
  media?: Media
}