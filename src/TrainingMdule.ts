import { GenericData } from "./GenericData"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface TrainingModule extends Module {
  type: "training-module"
  genericData?: GenericData
  textblock?: Textblock
}