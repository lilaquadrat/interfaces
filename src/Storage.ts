import { ObjectId } from "mongodb";
import { MediaMetadata } from "./MediaMetadata";

export interface Storage {
    company?: string
    project?: string

    filename?: string
    prefix?: string
    
    path?: string

    metadata?: MediaMetadata

    bucket?: string

    versions?: ObjectId[]

    parent?: ObjectId

    app?: string
    appId?: string
}