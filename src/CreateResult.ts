import { InferIdType } from 'mongodb';

export interface CreateResult<T> {

  _id: InferIdType<T>
  id?: string | number

}
