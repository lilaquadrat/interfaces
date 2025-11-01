type BaseValue = {
    id: string
    label: string
    description?: string
}

type StringValue = BaseValue & {
    type: 'string'
}

type TextValue = BaseValue & {
    type: 'text'
    max?: number
}

type NumberValue = BaseValue & {
    type: 'number'
}

type LinkValue = BaseValue & {
    type: 'link'
}

type MediaValue = BaseValue & {
    type: 'media'
}

type BooleanValue = BaseValue & {
    type: 'boolean'
}

type SelectValue = BaseValue & {
    type: 'select'
    multiple?: boolean
    options: Array<{
        value: string
        text: string
        description?: string
    }>
}

type CustomModuleValue = StringValue | TextValue | NumberValue | LinkValue | MediaValue | BooleanValue | SelectValue

export interface DesignCustomModule {

    hint: string
    module: string
    name?: string
    description?: string
    additionalData?: {
        name?: string
        description?: string
    }
    values?: CustomModuleValue[]
}
