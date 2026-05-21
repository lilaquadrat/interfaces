/**
 * Returned by the rate limiter when a configured limit is exceeded. The
 * caller is expected to respond 429 with the included Retry-After value
 * (seconds until the offending window resets).
 */
export interface LimiterBreach {
  /** Which bucket tripped first. */
  interval: 'minute' | 'hour';
  /** Configured limit for that interval. */
  limit: number;
  /** Observed count (post-increment) for that interval. */
  count: number;
  /** Seconds until the offending window resets. Suitable for Retry-After. */
  retryAfter: number;
}
