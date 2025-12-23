import { ObjectId } from "mongodb";
import { MediaMetadata } from "./MediaMetadata";

export interface Storage {
    company: string
    project?: string

    /**
     * this document can be bound to a specific customer
     */
    customer?: ObjectId
    /**
     * this document can be bound to a specific list and customer
     */
    list?: ObjectId

    filename: string
    prefix?: string
    
    path?: string

    metadata?: MediaMetadata

    parent?: ObjectId

    /**
     * app functions here as a bucket
     */
    app?: string

    /**
     * for better classification
     * e.g. profilepicture
     */
    type?: string
}