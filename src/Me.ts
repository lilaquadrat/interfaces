import { Settings } from "./Settings"

export interface Me {

  id?: string
  prename?: string
  lastname?: string
  email?: string
  state?: string[]
  settings?: Settings['settings']
  termsAccepted?: boolean
  emailConfirmed?: boolean

  /**
   * presence: last moment a websocket of this user was proven alive.
   * written by the chat service only, never through the /me routes.
  */
  lastSeen?: Date | string

  /**
   * presence: raw "holds at least one live socket" flag. The `online` state exposed to
   * clients is derived from this AND lastSeen freshness, so a crashed process that never
   * cleared the flag still reads as offline.
  */
  connected?: boolean

}