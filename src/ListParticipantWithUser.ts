import { ListParticipants } from "./ListParticipants";
import { Payment } from "./Payment";
import { BasicData } from "./BasicData";
import { CustomerMinimal } from "./CustomerMinimal";
import { WithStructures } from "./WithStructures";
import { ListParticipantMatch } from "./ListParticipantMatch";

export type ListParticipantWithCustomerAndPayment = BasicData<ListParticipants>
  & 
  {
    user: CustomerMinimal & WithStructures
  } 
  & 
  {
    payment?: Pick<BasicData<Payment>, '_id' | 'state' | 'items' | 'provider' | 'currency' | 'amount'>;
    match?: ListParticipantMatch;
  }