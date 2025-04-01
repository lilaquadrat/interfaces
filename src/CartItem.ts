import { ListCategory } from "./ListCategory"

export interface CartItem extends ListCategory {

    id: string
    quantity: number

}