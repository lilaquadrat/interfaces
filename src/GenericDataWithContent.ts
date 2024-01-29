import {Content} from "./Content"
import { CompatibleGenericDataType } from "./GenericData";

type GenericDataWithContent = {
    [key in CompatibleGenericDataType]: Record<string, Content>
}

export {GenericDataWithContent};