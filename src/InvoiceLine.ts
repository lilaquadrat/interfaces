export interface InvoiceLine {
    description: string
    quantity: number
    unitPrice: number
    taxRate: number
    taxAmount: number
    netAmount: number
    grossAmount: number
    unit?: string
    position?: number
    productId?: string
}
