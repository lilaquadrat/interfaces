import { GenericData } from "./GenericData"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface FilesModule extends Module {
  type: "files-module" | `${string}-files-module`
  textblock?: Textblock
  genericData?: GenericData
}
