import { BasicData } from "./BasicData";
import { Content } from "./Content"
import { Customers } from "./Customers";
import { CompatibleGenericDataType } from "./GenericData";
import { List } from "./List";
import { Media } from "./Media";
import { Structure } from "./Structure";

type GenericDataDistributed =  {
    [key in CompatibleGenericDataType]: (BasicData<List>['_id']|BasicData<Content>['_id']|BasicData<Customers>['_id']|BasicData<Structure>['_id'])[]
} & {
    data: Record<string, BasicData<Content | List | Customers | Media | Structure>>;
}

export { GenericDataDistributed };