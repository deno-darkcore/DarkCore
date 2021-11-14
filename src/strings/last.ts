import { Char } from "./types.ts";

/**
 * ```ts
 * const myString = "Hello world";
 * console.log(last(myString)); // => 'd'
 * ```
 * Prints the last character of a string
 */

export function last(str: string): Char {
  return new Char(str[str.length - 1]);
}
