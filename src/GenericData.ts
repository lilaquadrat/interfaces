import { BasicData } from "./BasicData";
import { Content } from "./Content"
import { Customers } from "./Customers";
import { List } from "./List";
import { Media } from "./Media";
import { Structure } from "./Structure";

type CompatibleGenericDataType = 'editor' | 'lists' | 'customers' | 'media' | 'structures';

type GenericData = {
    [key in CompatibleGenericDataType]: string[]
} & {
    data: BasicData<Content | List | Customers | Media | Structure>[];
}


export {
    GenericData,
    CompatibleGenericDataType
}