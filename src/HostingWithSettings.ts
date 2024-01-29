import { Hosting } from "./Hosting"

export interface HostingWithSettings extends Hosting {
  settings: {
    ip: string
  }
}
