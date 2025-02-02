import { Project } from "./Project"

export interface ProjectWithCompany extends Omit<Project, 'company'> {

  company: {name: string, id: string}

}