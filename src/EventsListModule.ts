import { EventsListElement } from "./events-list-element"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface EventsListModule extends Module {
  type: "events-list-module" | `${string}-events-list-module`
  textblock?: Textblock
  elements?: EventsListElement[]
}