import { Link } from "./Link"
import { Module } from "./Module"
import { Picture } from "./Picture"
import { Textblock } from "./Textblock"

export interface BlogIntroModule extends Module {
  type: "blog-intro-module"
  author?: string
  date?: string
  textblock?: Textblock
  picture?: Picture
  link?: Link
}
