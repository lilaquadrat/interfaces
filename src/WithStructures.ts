import { Structure } from "./Structure";

/**
 * A utility type that can be extended by any interface to support
 * dynamic properties with keys prefixed with 's-'
 * 
 * @example
 * interface MyInterface extends WithDynamicProperties {
 *   name: string;
 *   // MyInterface now supports s- prefixed dynamic properties
 * }
 */
export interface WithStructures {
  /**
   * Dynamic properties with s- prefix
   * Allows for custom properties like s-color, s-count, s-items, etc.
   */
  [key: `s-${string}`]: string | boolean | number | Array<string>;
  structures?: Structure[]
}
