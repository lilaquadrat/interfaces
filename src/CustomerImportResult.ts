import { ErrorObject } from "ajv"
import { ObjectIdString } from "./ObjectIdString"

export interface CustomerImportResult {
    duplicateEmails: string[]
    statistics: {
        success: number
        skipped: number
        error: number
    }
    responses: {
        email: string
        _id?: ObjectIdString
        id?: string
        error?: {
            message: string
            errors: ErrorObject[]
        }
    }[]
}