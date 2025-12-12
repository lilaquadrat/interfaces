import { type StorageSharedKeyCredential } from '@azure/storage-blob';

export interface ShareClientOptions {
  connectionString?: string
  container?: string
  shareName?: string
  baseFolder?: string
  accountName?: string
  sharedKeyCredentials?: StorageSharedKeyCredential
  /**
   * s3/minio accessKey
   */
  accessKey?: string
  /**
 * s3/minio secretKey
 */
  secretKey?: string
  /**
   * s3/minio endpoint
   */
  endpoint?: string
}
