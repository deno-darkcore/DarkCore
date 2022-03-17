/**
 * ```ts
 * let myArray = [1, 2, 3];
 * console.log(remove(myArray, 0)); // => '[2, 3]'
 * ```
 */

export function remove(array: Array<any>, index: number): Array<any> {
  return array.slice(0, index).concat(array.slice(index + 1)); // Remove element from array and return the new array
}

