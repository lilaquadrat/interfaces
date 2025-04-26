import { Module } from "./Module";
import { StoryElement } from "./story-element";

export interface StoryModule extends Module {
  type: "story-module"
  elements?: StoryElement[]
}