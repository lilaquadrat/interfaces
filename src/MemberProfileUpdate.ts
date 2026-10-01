import type { CustomerPerson } from './CustomerPerson';

export type MemberProfileUpdate = Partial<Pick<CustomerPerson,
  'prename' | 'name' | 'addressAddition' | 'street' | 'streetNumber'
  | 'zipcode' | 'city' | 'country' | 'osm_id' | 'phone'
>>;
