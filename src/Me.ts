import { Settings } from "./Settings"

export interface Me {

  id?: string
  prename?: string
  lastname?: string
  email?: string
  state?: string[]
  settings?: Settings['settings']
  termsAccepted?: boolean

}