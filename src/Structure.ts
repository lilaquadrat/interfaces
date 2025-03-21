export interface Structure {
  /**
   * Unique identifier for the structure
   */
  id: string

  /**
   * The question text
   */
  question: string

  /**
   * Type of the structure
   */
  type: 'string' | 'text' | 'number' | 'select' | 'boolean'
  model: 'listsParticipants' | 'customers'

  /**
   * Maximum value for number type or maximum length for text type
   */
  max?: number

  /**
   * Minimum value for number type or minimum length for text type
   */
  min?: number
  multiple?: boolean

  /**
   * Available options for select and multiselect types
   */
  options?: {
    value: string
    text: string
    description?: string
  }[]
  /**
   * Company identifier
   */
  company: string
  project: string

  description?: string
}