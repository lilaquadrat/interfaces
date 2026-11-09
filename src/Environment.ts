import { Endpoints } from "./Endpoints"
import { EnvironmentAuth } from "./EnvironmentAuth"

/**
 * an environment is the deployment context a project is rendered in. it owns
 * the endpoints every project in that environment shares, so a project config
 * never has to repeat them.
 */
export interface Environment {

    /**
     * stable identifier of the environment, e.g. `local`, `next` or `live`.
     */
    id: string

    endpoints: Endpoints

    /**
     * authentication provider every project in the environment shares.
     */
    auth?: EnvironmentAuth

}