import {Content} from './Content';

export interface ChildData {
  data: {
    [key: string]: Content
  }
  index: string[]
}
