import { Module } from "./Module"

export interface QuellcodeModule extends Module {
  type: "quellcode-module"
  headline?: string
  subline?: string
  intro?: string
  code?: string
  text?: string[]
}