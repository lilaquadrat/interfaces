export interface Certificate {
  company?: string
  project?: string

  filename?: string

  valid: {
    from: Date
    to: Date
    isValid?: boolean
  }

  type: 'domain' | 'wildcard'
  contentType: 'pem' | 'pfx'

  domains: string[]

}