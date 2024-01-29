import { IdentifiersEntity } from "./IdentifiersEntity";

export interface WildcardCertificates {
  identifiers?: IdentifiersEntity[];
  cert: string;
  chain: string;
  valid: {from: Date, to: Date}
}

