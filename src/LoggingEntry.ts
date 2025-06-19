export interface LoggingEntry<T> {
    date: Date
    type: string
    metadata: T
  }