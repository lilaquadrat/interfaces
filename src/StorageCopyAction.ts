export interface StorageCopyAction {

    sourceCompany: string
    sourceProject: string
    targetCompany: string
    targetProject: string
    prefix?: string
    user: string
    app: string
    overwrite?: true

}