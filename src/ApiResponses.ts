
export interface ApiResponses<T = void> {

  post: {
    data: T,
    status: 200 | 204
  }

  put: {
    data: T,
    status: 200 | 204
  }

}
