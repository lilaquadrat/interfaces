import { GalleryElement } from "./GalleryElement"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface GalleryModule extends Module {
  type: "gallery-module" | `${string}-gallery-module`
  description?: Textblock
  elements?: GalleryElement[]
}
