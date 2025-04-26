import { CompareElement } from "./CompareElement"
import { CompareStructureElement } from "./CompareStructureElement"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface CompareModule extends Module {
    type: "compare-module"
    textblock?: Textblock
    elements?: CompareElement[]
    structure?: CompareStructureElement[]
}