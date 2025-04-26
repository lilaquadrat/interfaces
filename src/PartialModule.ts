import { Module } from "./Module";

export interface PartialModule extends Module {
  type: "partial-module";
  company?: string;
  project?: string;
  partialId?: string;
  modules?: string[];
}
