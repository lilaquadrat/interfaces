import { ObjectId } from 'mongodb';

export interface Upload {
    _id?: ObjectId;
    filename?: string;
    prefix?: string;
    company?: string;
    project?: string;
    user?: string;
    app?: string;
    mimetype?: string;
    size?: number;
    chunks: number;
    paths?: { path: string, index: number }[];
    updated?: Date;
    state?: 'uploading' | 'waiting' | 'processing' | 'finished' | 'error';
    bucket?: string
}
