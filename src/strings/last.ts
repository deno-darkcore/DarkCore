/**
 * Returns last char found in string
 * @since 0.0.1 (beta launch)
 * @catagory String 
 * @param {string} The string to find the last char of
 * @returns {string} returns single character string 
 * @see first
 * @example 
 * 
 * const myString = "Hello world";
 * console.log(last(myString)); // => d
 * 
 * @idea Create a char type and return that?
 */

import * as types from './types.ts'

export function last(str: string): types.Char {
  const char: types.Char = new types.Char(str[str.length - 1]);
	return char;
}