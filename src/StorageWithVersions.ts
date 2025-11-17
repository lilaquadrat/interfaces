import { Storage } from "./Storage";

export type StorageWithVersions = Storage & {
    versions?: Storage[]
}