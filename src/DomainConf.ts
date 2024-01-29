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

  defaultDomain?: string

  certificate?: string
}
