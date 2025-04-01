import { Structure } from "./Structure";

/**
 * Base interface containing only the standard properties
 */
interface BaseWithStructures {
  structures?: Structure[]
}

/**
 * A utility type that can be extended by any interface to support
 * dynamic properties with keys prefixed with 's-'
 * 
 * @example
 * interface MyInterface extends WithStructures {
 *   name: string;
 *   // MyInterface now supports s- prefixed dynamic properties
 * }
 */
export type WithStructures = BaseWithStructures & Partial<{
  [key: `s-${string}`]: string | boolean | number | Array<string>;
}>
