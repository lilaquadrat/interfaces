interface ProjectPermissions {

    _id: string
    company: string
    project: string
    name: string
    id: string
    scope: string[]

}

interface CompanyWithProjectsPermissions<T = ProjectPermissions> {
    _id?: string
    name?: string
    projects?: T[]
    scope: string[]
}


type Permissions = CompanyWithProjectsPermissions[]

export {
    Permissions,
    ProjectPermissions,
    CompanyWithProjectsPermissions
}