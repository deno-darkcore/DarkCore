/**
 * ```ts
 * Can not be used
 * ```
 * A class that in not exported to user, and is only available to the char class
 * Its purpose is to add more description to char errors
 */

export class CharError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
