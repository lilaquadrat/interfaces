import { Accordion } from "./Accordion"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface FaqModule extends Module {
    type: "faq-module" | `${string}-faq-module`
    textblock?: Textblock
    accordion?: Accordion
}