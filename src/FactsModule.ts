import { FactsElement } from "./FactsElement"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface FactsModule extends Module {
  type: "facts-module" | `${string}-facts-module`
  textblock?: Textblock
  elements?: FactsElement[]
}
