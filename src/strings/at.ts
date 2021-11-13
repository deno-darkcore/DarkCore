/**
 * Returns char a certain position
 * @since 0.0.1 (beta launch)
 * @catagory String 
 * @param {string, int} The string, and the position to find the char at
 * @returns {string} returns single character string 
 * @example 
 * 
 * const myString = "DarkCore";
 * console.log(at(myString, 5)); // => C
 * 
 * @idea Create a char type and return that?
 */

import { Char } from './types.ts';

export function at(str: string, pos: number): Char | null {
  if (str[pos] == undefined) { // pos does not exist
    return null; // null == undefined
  }
  const char: Char = new Char(str[pos - 1]);
  return char;
}