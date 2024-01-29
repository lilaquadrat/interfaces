export interface ShareClientInterface {

  createFolder(basePath: string, folder: string): Promise<boolean>;
  removeFolder(path: string): Promise<boolean>;

  /**
     *
     *
     * @param {string} destination where to put the file
     * @param {string} filename the filename
     * @param {string} filePath file source path
     * @returns {Promise<boolean>}
     * @memberof ShareClientInterface
     */
  add(destination: string, filename: string, filePath: string, mimeHint?: string): Promise<boolean>;
  /**
     * creates a new file and puts in the given data
     *
     * @param {string} destination
     * @param {string} filename
     * @param {(string | Buffer)} data
     * @returns {Promise<boolean>}
     * @memberof ShareClientInterface
     */
  create(destination: string, filename: string, data: string | Buffer, mimeHint?: string): Promise<boolean>;
  remove(folder: string, file: string): Promise<boolean>;

  update(folder: string, filename: string, data: string | Buffer): Promise<boolean>;

  get(folder: string, filename: string): Promise<Buffer>;

  list(folder: string, filter: RegExp): Promise<string[]>;

  copy(files: string[], sourceFolder: string, destinationFolder: string): Promise<boolean>;

}
