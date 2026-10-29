/** how much of the hours allocated to a person in one category the person has booked so far */
export interface TimeTrackingProjectAllocationUsage {

  category: string;
  /** the allocated hours, missing when the person is allocated without a limit */
  hours?: number;
  /** everything the person booked on the category of the plan, in milliseconds */
  bookedTime: number;

}
