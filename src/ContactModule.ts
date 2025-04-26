import { CategoryStructure } from "./CategoryStructure"
import { GenericData } from "./GenericData"
import { GenericDataDistributed } from "./GenericDataDistributed"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface ContactModule extends Module {
  type: "contact-module" | `${string}-contact-module`
  genericData?: GenericData | GenericDataDistributed
  textblock?: Textblock
  categoryTextblock?: Textblock
  categories?: CategoryStructure[]
}