import { Module } from "./Module"
import { FooterContact } from "./FooterContact"
import { FooterSitemap } from "./FooterSitemap"
import { FooterSocial } from "./FooterSocial"
import { ListLink } from "./ListLink"
import { ListString } from "./ListString"
import { Picture } from "./Picture"
import { Textblock } from "./Textblock"

export interface FooterModule extends Module {
  type: "footer-module"
  legal?: string
  contact?: FooterContact
  social?: FooterSocial
  sitemap?: FooterSitemap[]
  list?: ListString
  links?: ListLink
  textblock?: Textblock
  picture?: Picture
}