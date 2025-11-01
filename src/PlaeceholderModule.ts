import { Module } from "./Module"

export interface PlaceholderModule extends Module {
  type: "placeholder-module" | `${string}-placeholder-module`
  hint?: string
  additionalData?: string
  inputData: Record<string, unknown>[]
}
