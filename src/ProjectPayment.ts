export interface ProjectPayment {

    type?: 'internal' | 'shopify' | 'stripe'

    /**
     * provider specific settings. the shape depends on `type`.
     */
    options?: Record<string, string>

}