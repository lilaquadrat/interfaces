import { PaymentProvider } from "./PaymentProvider";

export interface PaymentProviderStripe extends PaymentProvider {

  type: 'stripe'

  token: string
  validationKey: string

}