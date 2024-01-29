import { AvailableVariant, EditorMode } from "./AvailableVariant"

export interface DesignModule {
  name: string,
  /**
  * helps complex modules like contact.module for show different states like the form and the sucess content after submitting the form
  *
  * only available in editor mode 
  */
  editor: {
    modes: EditorMode[]
  },
  variants: AvailableVariant[],
  component: () => void
}
