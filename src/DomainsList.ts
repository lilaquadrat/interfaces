import { Certificate } from "./Certificate"
import { Domain } from "./Domain"

export interface DomainsList extends Domain {

  certificate: Partial<Certificate>

  certificateNeeded: boolean

  hosting?: {
    active?: boolean
  }

}
