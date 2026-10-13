export interface HistoryChange {

  /**
   * path of the changed field, nested objects are joined with a dot
   */
  field: string

  /**
   * human readable name of the field when the snapshot data knows it, e.g. the question of a structure
   */
  label?: string

  from: unknown
  to: unknown

}
