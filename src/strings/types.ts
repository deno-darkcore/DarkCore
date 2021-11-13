import { CharError } from './errors.ts'

export class Char {
  char: string;
  constructor(char: string) {
    if (char.length != 1) throw new CharError('Char not valid, as it holds less or more than one char'); // IDEA: Make special error type
    this.char = char;
  }
  toString(): string {
    return this.char;
  }
  isEqualTo(eq: Char) {
    if (this.char == eq.toString()) return true;
    return false;
  }
}

