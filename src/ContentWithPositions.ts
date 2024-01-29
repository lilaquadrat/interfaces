import {AdditionalContentInformation} from './AdditionalContentInformation';
import {Content} from './Content';

export interface ContentWithPositions {

  id?: Content['id']
  settings: Content['settings']
  top: Content['modules']
  content: Content['modules']
  bottom: Content['modules']
  additional: AdditionalContentInformation

}
