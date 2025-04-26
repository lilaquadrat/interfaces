import { PictureSource } from "./PictureSource"
import { SelectedFile } from "./SelectedFile"

export interface MediaApp {
  src?: string
  alt?: string
  type?: string,
  copyright?: string
  poster?: string
  file?: SelectedFile
  attributes?: string[]
  source?: PictureSource[]
}