import { Module } from "./Module"

export interface PlaceholderModule extends Module {
  type: "placeholder-module"
  hint?: string
  additionalData?: string
}
