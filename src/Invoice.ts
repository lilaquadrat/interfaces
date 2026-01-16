import { ObjectId } from "mongodb"
import { InvoiceAttachment } from "./InvoiceAttachment"
import { InvoiceLine } from "./InvoiceLine"
import { InvoiceParty } from "./InvoiceParty"
import { InvoicePaymentMeans } from "./InvoicePaymentMeans"
import { InvoiceReferences } from "./InvoiceReferences"
import { InvoiceTaxBreakdown } from "./InvoiceTaxBreakdown"
import { InvoiceTotals } from "./InvoiceTotals"

export type InvoiceProfile = 'zugferd-basic' | 'zugferd-comfort' | 'zugferd-extended' | 'xrechnung'

export type InvoiceState = 'draft' | 'issued' | 'sent' | 'paid' | 'cancelled'

export interface Invoice {
    _id?: ObjectId
    id?: number | string
    company: string
    project: string
    app: string
    profile: InvoiceProfile
    state: InvoiceState
    invoiceNumber?: string
    issueDate: string
    deliveryDate?: string
    dueDate?: string
    seller: InvoiceParty
    buyer: InvoiceParty
    lines: InvoiceLine[]
    taxBreakdown: InvoiceTaxBreakdown[]
    totals: InvoiceTotals
    paymentMeans?: InvoicePaymentMeans
    references?: InvoiceReferences
    notes?: string[]
    attachments?: InvoiceAttachment[]
    paymentId?: ObjectId
    customer?: ObjectId
}

