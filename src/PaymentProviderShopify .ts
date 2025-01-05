import { PaymentProvider } from "./PaymentProvider";

export interface PaymentProviderShopify extends PaymentProvider {

  type: 'shopify'

  validationKey: string

}