import { Link } from "./Link"
import { Media } from "./Media"
import { Textblock } from "./Textblock"

export interface StoryElement {
  id?: string
  textblock?: Textblock
  media?: Media
  link?: Link
  animation?: string 
  variant?: string[]
}