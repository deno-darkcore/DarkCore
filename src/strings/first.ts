import { Char } from "./types.ts";

/**
 * ```ts
 * let myString = "Hello, world!";
 * console.log(first(myString)); // => "H"
 */

export function first(str: string) {
  return new Char(str[0]);
}
