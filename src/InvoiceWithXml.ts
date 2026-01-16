import { Invoice } from "./Invoice"

export interface InvoiceWithXml extends Invoice {
    xml: string
}
