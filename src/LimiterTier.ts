/**
 * Rate-limit configuration for a single tier. Either or both fields may be
 * set. A missing field means no limit at that interval.
 */
export interface LimiterTier {
  /** Maximum requests allowed within a 60-second window. */
  minute?: number;
  /** Maximum requests allowed within a 60-minute window. */
  hour?: number;
}
