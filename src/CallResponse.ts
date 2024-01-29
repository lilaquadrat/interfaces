import { HttpStatusCode } from "./HttpStatusCodes";

export interface CallResponse<T> {
  status: HttpStatusCode;
  r: T;
}
