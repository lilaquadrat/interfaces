import { Link } from "./Link"
import { Textblock } from "./Textblock"

export interface PricesElement {
    price?: string
    interval?: string
    facts?: string[]
    variant?: string[]
    textblock?: Textblock
    callToAction?: Link
    more?: Link
}