export interface PaymentProviderProduct {

  id: string
  name: string
  description?: string

  /**
   * false if the product is archived at the provider
   */
  active: boolean

  /**
   * major units, like the prices stored in studio. missing if the product has no (flat) default price
   */
  price?: {
    amount: number
    currency: string
  }

  /**
   * link to the product in the provider's dashboard
   */
  url?: string

}
