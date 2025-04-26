import { ListLink } from "./ListLink";
import { Module } from "./Module";

export interface IndexModule extends Module {
  type: "index-module" | `${string}-index-module`
  links?: ListLink
}