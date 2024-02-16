import { BasicData } from "./BasicData";
import { Content } from "./Content"
import { Customers } from "./Customers";
import { List } from "./List";
import { Media } from "./Media";

type CompatibleGenericDataType = 'editor' | 'lists' | 'customers' | 'media';

type GenericData = {
    [key in CompatibleGenericDataType]: string[]
} & {
    data: BasicData<Content | List | Customers | Media>[];
}


export {
    GenericData,
    CompatibleGenericDataType
}