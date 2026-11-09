import type { List } from './List';
import type { ListCategory } from './ListCategory';
import type { PaymentProvider } from './PaymentProvider';
import type { PaymentProviderProduct } from './PaymentProviderProduct';

export interface PaymentProviderBase<T extends PaymentProvider = PaymentProvider> {

  provider: T

  /**
   * creates the sellable product for a category at the provider.
   * returns the provider's product id, which gets stored as the category's externalId
   */
  createProduct(category: ListCategory, list: Pick<List, 'name' | 'location' | 'start'>): Promise<string>

  /**
   * loads the product behind an externalId from the provider.
   * throws PRODUCT_NOT_FOUND if the provider doesn't know the id
   */
  getProduct(externalId: string): Promise<PaymentProviderProduct>

}
