import {Contract} from './Contract';

export interface Partner {

  id?: string

  state?: string

  contract?: {
    file?: string | Contract
    user?: string,
    date?: Date,
    path?: string,
    confirmed?: boolean
  }

  contacts?: string[]

}
