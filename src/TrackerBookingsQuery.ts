import type { BookingWindow } from './BookingWindow';
import type { TrackerUserQuery } from './TrackerUserQuery';

export interface TrackerBookingsQuery extends BookingWindow, TrackerUserQuery {}
