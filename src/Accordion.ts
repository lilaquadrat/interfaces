import {AccordionElement} from "./AccordtionElement"

export interface Accordion {
    openOnStart?: string
    multiOpen?: boolean
    disableControls?: boolean
    elements?: AccordionElement[]
  }
  