export function info(msg: string): void {
  const blue = "\x1b[34m";
  const reset = "\x1b[0m";

  console.log(`${blue}[INFO]${reset}: ${msg}`);
}
