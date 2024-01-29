export interface DataObject<T> {
  count?: number;
  all?: number;

  sites?: {
    first: number,
    last: number,
    current: number,
    range: [number, number]
  }

  data?: T;
}
