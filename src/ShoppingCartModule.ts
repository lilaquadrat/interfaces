import { GenericData } from "./GenericData";
import { Module } from "./Module";

export interface ShoppingCartModule extends Module {
  type: "shopping-cart-module"
  genericData?: GenericData
}