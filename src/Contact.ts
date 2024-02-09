import { CustomerBase } from "./CustomerBase"

export type Contact = Omit<CustomerBase, 'id' | 'note' | 'tags' | 'company'> & {
  message?: string
  category?: string
  prename?: string
}