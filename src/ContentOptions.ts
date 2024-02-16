import { Content } from "./Content";

export interface ContentOptions {
    company: string,
    project: string,
    partials?: boolean,
    children?: boolean,
    genericData?: boolean,
    affectedStates?: Content['state'][],
    categories?: {
        not?: string[]
        in?: string[]
    }
}