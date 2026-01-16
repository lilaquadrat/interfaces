export interface InvoiceParty {
    name: string
    street: string
    zipcode: string
    city: string
    countryCode: string
    vatId?: string
    taxNumber?: string
    legalEntity?: string
    contactName?: string
    contactEmail?: string
    buyerReference?: string
    gln?: string
    leitwegId?: string
}
