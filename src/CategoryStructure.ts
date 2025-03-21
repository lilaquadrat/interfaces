import { BasicData } from "./BasicData"
import { Structure } from "./Structure"

export interface CategoryStructure {
    title?: string
    description?: string
    structures: BasicData<Structure & {required?: boolean}>[]
    required?: string[]
}