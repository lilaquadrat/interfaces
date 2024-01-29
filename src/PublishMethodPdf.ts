import { PublishMethod } from "./PublishMethod"

export interface PublishMethodPdf extends PublishMethod {

  type: 'pdf'

  label: string

}
