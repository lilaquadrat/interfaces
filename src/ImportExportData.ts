import { BasicData } from "./BasicData";
import { Content } from "./Content";
import { Customers } from "./Customers";
import { Hosting } from "./Hosting";
import { List } from "./List";
import { ListParticipants } from "./ListParticipants";
import { Media } from "./Media";
import { Payment } from "./Payment";
import { PaymentProvider } from "./PaymentProvider";
import { PublishMethod } from "./PublishMethod";

export interface ImportExportData {
    editor: BasicData<Content>[]
    hosting: BasicData<Hosting>[]
    lists: BasicData<List>[]
    listParticipants: BasicData<ListParticipants>[]
    payments: BasicData<Payment>[]
    paymentsProviders: BasicData<PaymentProvider>[]
    publishMethod: BasicData<PublishMethod>[]
    media: BasicData<Media>[]
    customers: BasicData<Customers>[]
    permissions: BasicData<Permissions>[]
}