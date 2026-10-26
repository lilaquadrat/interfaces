/**
 * One time entry booked on a shift. The person is the shift assignment's customer, so it resolves
 * against the shift's participants.
 */
export interface TrackerShiftBooking {
  /** tracker entry ObjectId as hex string, the id the single entry screen edits and removes */
  id: string;
  /** shift ObjectId as hex string */
  shift: string;
  /** customer ObjectId as hex string; absent when the entry's owner has no connected customer */
  customer?: string;
  /** ISO instant */
  startTime?: string;
  /** ISO instant */
  endTime?: string;
  /** milliseconds */
  currentTime: number;
}
