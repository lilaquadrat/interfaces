export interface AccessLimitDoc {
  _id: string;
  minute: { bucket: number; count: number };
  hour: { bucket: number; count: number };
  expiresAt: Date;
}
