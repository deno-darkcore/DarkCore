export function warn(msg: string): void {
  const orange = "\x1b[33m";
  const reset = "\x1b[0m";

  console.error(`${orange}[WARNING]${reset}: ${msg}`)
}
