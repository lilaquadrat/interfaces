import {ChildData} from './ChildData';
import {ModuleIndexOptions} from './ModuleIndexOptions';
import {ModulePDFOptions} from './ModulePDFOptions';

export interface ModuleGeneric {

  [key: string]: any

  id?: string

  type: string

  uuid?: string

  variant?: string[]

  position?: string

  layout?: 'first' | 'last' | ''

  source?: string

  childData?: ChildData

  index?: ModuleIndexOptions

  pdf?: ModulePDFOptions

}
