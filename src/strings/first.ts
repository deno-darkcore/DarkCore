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
 * @idea Create a char type and return that?
 */

export function first(str: string) {
	return str[0];
}