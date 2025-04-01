
export interface PaymentProvider {

  type: 'shopify' | 'stripe'

  active: boolean

  label: string

}