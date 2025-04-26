import { MenuCategoryElement } from "./MenuCategoryElement";
import { Module } from "./Module";
import { Textblock } from "./Textblock";

export interface MenuModule extends Module {
  type: "menu-module" | `${string}-menu-module`;
  name?: string;
  textblock?: Textblock;
  intro?: Textblock;
  categories?: MenuCategoryElement[];
}
