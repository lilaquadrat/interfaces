import { BasicData } from "./BasicData";
import { Content } from "./Content"
import { Customers } from "./Customers";
import { CompatibleGenericDataType } from "./GenericData";
import { List } from "./List";
import { Media } from "./Media";
import { Structure } from "./Structure";

type GenericDataWithContent = {
    [key in CompatibleGenericDataType]: Record<string, BasicData<Content | List | Customers | Media | Structure>>
}

export { GenericDataWithContent };