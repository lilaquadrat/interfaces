/**
 * One time entry of a time tracking project as the plan view lists it. A booking carries either a
 * category (plan categories, legacy `worktime`|`call`) or a shift, never both for new entries.
 */
export interface TrackerBooking {
  /** tracker entry ObjectId as hex string, the id the single entry screen edits and removes */
  id: string;
  /** plan category id or legacy `worktime`|`call`; absent when the entry books on a shift */
  category?: string;
  /** shift ObjectId as hex string; absent when the entry books on a category */
  shift?: string;
  description?: string;
  /** the account that booked the entry; names are absent when the account has no profile */
  user: {
    id: string;
    prename?: string;
    lastname?: string;
  };
  /** ISO instant */
  startTime?: string;
  /** ISO instant */
  endTime?: string;
  /** milliseconds */
  currentTime: number;
}
