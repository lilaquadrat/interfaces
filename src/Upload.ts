import { ObjectId } from 'mongodb';
import { ObjectIdString } from './ObjectIdString';

export interface Upload {
    _id?: ObjectId;
    filename?: string;
    prefix?: string;
    company?: string;
    project?: string;
    customer?: ObjectIdString | ObjectId;
    list?: ObjectIdString | ObjectId;
    user?: string;
    app?: string;
    mimetype?: string;
    size?: number;
    chunks: number;
    paths?: { path: string, index: number }[];
    updated?: Date;
    state?: 'uploading' | 'waiting' | 'processing' | 'finished' | 'error';
    options?: {
        /**
         * create thumbnails for images
         */
        thumbnails?: boolean,
        overwrite?: boolean
    }
}
