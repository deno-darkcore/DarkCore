export function info(msg: string): void {
  const yellow = "\033[33m";
  const reset = "\x1b[0m";

  console.log(`${yellow}[INFO]${reset}: ${msg}`);
}
