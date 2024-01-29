import { Filter } from "mongodb"

export interface ListCustomQueries<M> {

    countQuery: Filter<M>
    aggregation: Object[]

}