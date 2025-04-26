import { ListString } from "./ListString"
import { Module } from "./Module"
import { Picture } from "./Picture"
import { Textblock } from "./Textblock"
import { Video } from "./Video"

export interface VideoModule extends Module {
  type: "video-module" | `${string}-video-module`
  fontVariant?: string[]
  video?: Video
  poster?: Picture
  textblock?: Textblock
  list?: ListString
}