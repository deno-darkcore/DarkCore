import { Char } from "./types.ts";

/**
 * ```ts
 * let myString = "Hello, world!";
 * console.log(at(myString, 0)); // => 'H'
 * ```
 * 
 * Returns the character at the given index
 */

export function at(str: string, pos: number): Char | null {
  if (str[pos] == undefined) { // pos does not exist
    return null; // null == undefined
  }
  return new Char(str[pos - 1]);
}
