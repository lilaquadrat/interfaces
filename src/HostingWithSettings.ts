import { Hosting } from "./Hosting"

export interface HostingWithSettings extends Hosting {
  settings: {
    ipv4: string
    ipv6: string
  }
}
