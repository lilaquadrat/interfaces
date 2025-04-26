import { Link } from "./Link"
import { Module } from "./Module"

export interface QuoteModule extends Module {
  type: "quote-module" | `${string}-quote-module`
  citation?: string
  quote?: string
  link?: Link
}