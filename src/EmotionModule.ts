import { Link } from "./Link"
import { Module } from "./Module"
import { Picture } from "./Picture"
import { Textblock } from "./Textblock"
import { Video } from "./Video"

export interface EmotionModule extends Module {
  type: "emotion-module"
  fontVariant?: string[]
  background?: Picture
  video?: Video
  textblock?: Textblock
  picture?: Picture
  links?: Link[]
}
