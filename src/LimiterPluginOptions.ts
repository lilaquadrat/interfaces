import { type LimiterTier } from './LimiterTier';

/**
 * Per-prefix tier override. The longest matching `prefix` wins when several
 * apply to the same request URL.
 */
export interface LimiterPrefixOverride {
  prefix: string;
  tier: LimiterTier;
}

/**
 * Configuration accepted by the studio limiter Fastify plugin.
 *
 * Tiers are resolved from the request URL prefix:
 *   /public/...   → tiers.public  (IP-keyed)
 *   /members/...  → tiers.members (user-keyed, IP fallback)
 *   everything    → tiers.user    (user-keyed, IP fallback)
 *
 * `namespace` is shared across APIs: same string = same counter pool.
 */
export interface LimiterPluginOptions {
  /** Shared namespace across APIs. Same string = shared counters. */
  namespace: string;
  /** Tier per URL prefix family. */
  tiers: {
    public: LimiterTier;
    members: LimiterTier;
    user: LimiterTier;
  };
  /** Optional per-prefix overrides. Longest match wins. */
  overrides?: LimiterPrefixOverride[];
  /** Routes to skip entirely. Default: ['/health', '/']. */
  ignoreRoutes?: string[];
  /** URL prefixes that skip rate limiting entirely. Longest match wins. */
  whitelist?: string[];
  /** Fail-open if Mongo errors. Default: true. */
  skipOnError?: boolean;
}
