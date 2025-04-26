import { Link } from "./Link"
import { ListLink } from "./ListLink"
import { ListString } from "./ListString"
import { Picture } from "./Picture"
import { Textblock } from "./Textblock"

export interface PicturegroupElement {
    picture?: Picture
    link?: Link
    textblock?: Textblock
    list?: ListString
    links?: ListLink
  }