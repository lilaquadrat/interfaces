import { BasicData } from "./BasicData";
import {Content} from "./Content"

type CompatibleGenericDataType = 'editor' | 'lists' | 'customers' | 'media';

type GenericData = {
    [key in CompatibleGenericDataType]: string[]
} & {
    data: BasicData<Content>[]
}

export {
    GenericData,
    CompatibleGenericDataType
}