/**
 * Represents a webhook call with details about the company, project, and other relevant information.
 */
export interface WebhookCall {
    /**
     * The name of the company associated with the webhook call.
     */
    company: string

    /**
     * The name of the project associated with the webhook call.
     */
    project: string

    /**
     * Indicates whether the webhook call is a test.
     */
    test?: boolean

    /**
     * The body of the webhook call, containing the payload data.
     */
    body: Record<string, any>;

    /**
     * The type of the webhook call.
     */
    type: string

    /**
     * The provider of the webhook service.
     */
    provider: string
}