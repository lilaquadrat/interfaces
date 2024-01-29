import { ObjectId } from "mongodb";
import { ListParticipants } from "./ListParticipants";

export type ListParticipantWithUser = ListParticipants
& {
  user: {
    name: string,
    email: string,
    id: string,
    _id: ObjectId
  }
};