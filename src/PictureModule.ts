import { Module } from "./Module"
import { Picture } from "./Picture"
import { Textblock } from "./Textblock"

export interface PictureModule extends Module {
  type: "picture-module" | `${string}-picture-module`
  picture?: Picture
  textblock?: Textblock
}