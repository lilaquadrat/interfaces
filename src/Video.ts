import { SelectedFile } from "./SelectedFile"
import { VideoSource } from "./VideoSource"

export interface Video {
    src?: string
    alt?: string
    poster?: string
    attributes?: string[]
    source1?: VideoSource
    source2?: VideoSource
    source3?: VideoSource
    file?: SelectedFile
  }