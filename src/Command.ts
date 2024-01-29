export type Command<T> = T extends 'nginx'
  ? 'restart' | 'start' | 'stop'
  : T extends 'docker'
    ? 'up' | 'down' | 'rebuild' | 'stop' | 'kill' | 'restart' | 'check' | 'status'
    : never;