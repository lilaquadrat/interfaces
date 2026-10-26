/**
 * A shift one person may book tracked time on. The tracker app owns this projection so a member
 * does not need `shifts:read`: the server resolves the caller's customer and only returns the
 * shifts that customer is assigned to.
 */
export interface TrackerBookingShift {
  /** shift ObjectId as hex string, the value a tracker entry stores as `shift` */
  _id: string;
  title: string;
  /** ISO instant, the shift's planned start */
  start: string;
  /** ISO instant, the shift's planned end */
  end: string;
}
