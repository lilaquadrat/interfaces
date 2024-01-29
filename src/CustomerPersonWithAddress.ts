import { CustomerPerson } from "./CustomerPerson";
import {Address} from "./Address";

export type CustomerPersonWithAddress = CustomerPerson & Required<Address>;