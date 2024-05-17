import { ErrorObject } from 'ajv/dist/types';

export interface ResponseError {
    errors?: ErrorObject[]
    message: string
}