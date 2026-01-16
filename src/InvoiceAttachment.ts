export interface InvoiceAttachment {
    type: 'pdf' | 'xml'
    name: string
    mimeType: string
    key?: string
    size?: number
}
