export interface EmailsContent {

    // the user is reserved but not confirmed
    waiting: string

    // the user is confirmed
    active: string

    // the usage/event is fulfilled
    post: string
}