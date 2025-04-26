import { Link } from "./Link"
import { ListLink } from "./ListLink"
import { ListString } from "./ListString"
import { Module } from "./Module"
import { Textblock } from "./Textblock"

export interface CallToActionModule extends Module {
    type: "callToAction-module"
    textblock?: Textblock
    list?: ListString
    links?: ListLink
    link?: Link
}
