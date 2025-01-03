import { ListParticipants } from "./ListParticipants";
import { Payment } from "./Payment";
import { BasicData } from "./BasicData";
import { CustomerMinimal } from "./CustomerMinimal";

export type ListParticipantWithCustomerAndPayment = BasicData<ListParticipants>
  & 
  {
    user: CustomerMinimal
  } 
  & 
  {
    payment?: Pick<BasicData<Payment>, '_id' | 'state' | 'items' | 'provider' | 'currency' | 'amount'>;
  }