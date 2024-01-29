export interface Scope extends Array<SingleScope> {}

export interface SingleScope extends String {}

export interface ScopeObject {
  [key: string]: Scope
}
export interface ScopeObjectWithAdmin {
  [key: string]: Scope
}
