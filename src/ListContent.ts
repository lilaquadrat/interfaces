export interface ListContent {

    // list not active for enrollment
    pre: string

    // user is able to enlist
    open: string

    // the user is reserved but not confirmed
    waiting: string

    // the user is confirmed
    active: string

    // the usage/event is fulfilled
    post: string
}