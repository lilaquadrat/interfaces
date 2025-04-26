import { ListString } from "./ListString"
import { Module } from "./Module"
import { PicturegroupElement } from "./PicturegroupElement"
import { Textblock } from "./Textblock"

export interface PicturegroupModule extends Module {
  type: "picturegroup-module"
  elements?: PicturegroupElement[]
  title?: Textblock
  list?: ListString
  textblock?: Textblock
}