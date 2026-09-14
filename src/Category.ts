import { AccessRule } from "./AccessRule";

export interface Category {
    company: string
    project: string
    key: string
    label: string
    read: AccessRule[];
}