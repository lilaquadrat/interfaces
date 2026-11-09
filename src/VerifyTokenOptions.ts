export interface VerifyTokenOptions {
  /** JWKS endpoint. Defaults to process.env.JWT_URL. */
  jwksUri?: string;
  /** expected issuer. Defaults to process.env.JWT_ISSUER. Skipped if unset. */
  issuer?: string;
  /** expected audience. Skipped if unset. */
  audience?: string;
}
