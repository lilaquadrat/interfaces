export interface DatabaseQueryOptions {
  /**
     * include immutable history entries in the data
     *
     * @type {boolean}
     * @memberof DatabaseQueryOptions
     */
  includeHistory?: boolean;
  /**
     * query for history entries, doesnt delete immutable_parent
     *
     * @type {boolean}
     * @memberof DatabaseQueryOptions
     */
  isHistory?: boolean;
  /**
     * tags is a predefined attribute
     * is this is true, the query builder will leave them alone
     *
     * @type {boolean}
     * @memberof DatabaseQueryOptions
     */
  keepTags?: boolean;
  /**
     *
     * @type {boolean}
     * @memberof DatabaseQueryOptions
     */
  keepSearch?: boolean;
  keepSort?: boolean;
}
