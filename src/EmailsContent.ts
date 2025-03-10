import { ListParticipants } from "./ListParticipants"
import { ObjectIdString } from "./ObjectIdString"

export interface EmailsContent {

    contentId: ObjectIdString

    audience: 'public' | 'members'

    affectedState: ListParticipants['state']
}