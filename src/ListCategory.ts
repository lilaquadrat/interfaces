import Price from "./Price";

export interface ListCategory {

  id: string;
  name: string
  description?: string
  amount?: number
  disabled?: boolean
  price?: Price

}