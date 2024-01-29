export interface DatabaseQuerySites {

  first: number;
  current: number;
  last: number;

  /**
     * the range of documents you got
     * example: site 1, limit 10, 10 or more documents in the database
     * [1, 10]
     */
  range: [number, number];
}
