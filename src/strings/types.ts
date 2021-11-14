import { CharError } from "./errors.ts";

/**
 * ```ts
 * let myChar = new Char('a');
 * console.log(myChar.toString()); // => 'a'
 * ```
 *
 * The Char class is a wrapper for a single character. 
 * It is used to manage a char type without having the
 * unneeded options in intellisense, or other things
 */
export class Char {
  char: string;
  constructor(char: string) {
    if (char.length != 1) {
      throw new CharError(
        "Char not valid, as it holds less or more than one char",
      ); // IDEA: Make special error type
    }
    this.char = char;
  }
  /**
   * ```ts
   * For the example, see the Char class example
   * ```
   * Returns the char value, allows for quick transportation
   */
  toString(): string {
    return this.char;
  }
  /**
   * ```ts
   * let myChar = new Char('a');
   * console.log(myChar.isEqualTo('a')); // => true
   * ```
   * Instead of accessing the char value directly, this allows quick comparison
   */
  isEqualTo(eq: Char) {
    return this.char == eq.toString();
  }
}
