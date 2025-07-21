import { type StorageSharedKeyCredential } from '@azure/storage-blob';

export interface ShareClientOptions {
  connectionString?: string
  container?: string
  shareName?: string
  baseFolder?: string
  accountName?: string
  sharedKeyCredentials?: StorageSharedKeyCredential
}
