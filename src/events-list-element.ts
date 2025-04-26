import { GenericData } from "./GenericData"
import { Link } from "./Link"
import { Picture } from "./Picture"
import { Textblock } from "./Textblock"

export interface EventsListElement {
  textblock?: Textblock
  artist?: string
  name?: string
  location?: string
  callToAction?: Link
  link?: Link
  genericData?: GenericData
  start?: Date
  end?: Date
  picture?: Picture
}