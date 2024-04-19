import { BasicData } from "./BasicData";
import { Content } from "./Content"
import { Customers } from "./Customers";
import { CompatibleGenericDataType } from "./GenericData";
import { List } from "./List";
import { Media } from "./Media";

type GenericDataDistributed =  {
    [key in CompatibleGenericDataType]: (BasicData<List>['_id']|BasicData<Content>['_id']|BasicData<Customers>['_id'])[]
} & {
    data: Record<string, BasicData<Content | List | Customers | Media>>;
}

export { GenericDataDistributed };