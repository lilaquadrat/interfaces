import { PublishMethod } from "./PublishMethod";

export interface PublishMethodWebhook extends PublishMethod {

  type: 'webhook'

  url: string;

  label: string

  availableForApps: string[]

}