import { ObjectId } from "mongodb";

export interface CustomerMinimal {
    name: string,
    email: string,
    id: string,
    _id: ObjectId
}