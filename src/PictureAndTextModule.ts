import { ListLink } from "./ListLink"
import { ListString } from "./ListString"
import { Module } from "./Module"
import { Picture } from "./Picture"
import { Textblock } from "./Textblock"

export interface PictureAndTextModule extends Module {
  type: "pictureandtext-module"
  picture?: Picture
  textblock?: Textblock
  title?: Textblock
  list?: ListString
  links?: ListLink
}
