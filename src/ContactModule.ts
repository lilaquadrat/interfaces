import { GenericData } from "./GenericData"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface ContactModule extends Module {
  type: "contact-module"
  genericData?: GenericData
  textblock?: Textblock
  categoryTextblock?: Textblock
  categories?: { type: 'array', contains: { model: 'contact-category-element' } }
}