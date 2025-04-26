import { Module } from "./Module"
import { PricesElement } from "./PricesElement"
import { Textblock } from "./Textblock"

export interface PricesModule extends Module {
  type: "prices-module" | `${string}-prices-module`
  textblock?: Textblock
  elements?: PricesElement[]
}