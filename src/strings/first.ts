/**
 * Returns first char found in string
 * @since 0.0.1 (beta launch)
 * @catagory String 
 * @param {string} The string to find the first char of
 * @returns {string} returns single character string 
 * @see last
 * @example 
 * 
 * const myString = "Hello world";
 * console.log(first(myString)); // => H
 * 
 */

import { Char } from './types.ts';

export function first(str: string) {
  const char: Char = new Char(str[0]);
  return char;
}