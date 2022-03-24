/**
 * ```ts
 * err("Syntax err", "..."); // => ...
 * ```
 * Logs an error message into the console
 */

export function error(type: string, msg: string): void {
  const red = "\x1b[31m";
  const reset = "\x1b[0m";

  console.error(`${red}[ERROR] [${type}]${reset}: ${msg}`)
}

