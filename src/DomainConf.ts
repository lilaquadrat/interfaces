import { Domain } from "./Domain"

export interface DomainConf {

  domains: Domain[]

  port?: number

  ports?: {
    http?: number,
    https?: number,
  }

  company: string
  project: string

  isMain?: boolean

  /**
   * defines if the domain is a default domain that is created by the system for preview purposes
   */
  defaultDomain?: string

  certificate?: string
}
