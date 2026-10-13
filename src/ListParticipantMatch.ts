import { StructureMatchState } from "./StructureMatchState";

/**
 * How well a list participant matches a shift's structure conditions, resolved by the planning
 * query so the candidate list can be ordered across all pages rather than just the loaded one.
 * The state reports the hard constraints; the score grades the preferences.
 */
export interface ListParticipantMatch {
  state: StructureMatchState;
  score: number;
  matched: number;
  total: number;
}