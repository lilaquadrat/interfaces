import { ErrorObject } from 'ajv/dist/types';

export interface ResponseError {
    errors?: ErrorObject<string, Record<string, any>, unknown>[]
    message: string
}