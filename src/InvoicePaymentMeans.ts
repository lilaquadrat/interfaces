export interface InvoicePaymentMeans {
    method: 'sepa-credit-transfer' | 'bank-transfer' | 'card' | 'cash'
    iban?: string
    bic?: string
    accountHolder?: string
    sepaMandateId?: string
    paymentTerms?: string
    dueDate?: string
}
