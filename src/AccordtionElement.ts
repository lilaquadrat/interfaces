import { ListLink } from "./ListLink"
import { ListString } from "./ListString"
import { Textblock } from "./Textblock"

export interface AccordionElement {
    textblock?: Textblock
    list?: ListString
    links?: ListLink
  }