/**
 * one page of the designs a project may pick from: its own plus the shared library
 */
export interface DesignListOptions {
  company: string
  project: string
  search?: string
  sort?: string
  order?: number
  site: number
  limit: number
}
