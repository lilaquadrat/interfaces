import { PictureSource } from "./PictureSource"
import { SelectedFile } from "./SelectedFile"

export interface Picture {
    src?: string
    alt?: string
    copyright?: string
    file?: SelectedFile
    source?: PictureSource[]
  }
  