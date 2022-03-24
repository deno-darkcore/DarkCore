const black = "\x1b[30m";
const red = "\x1b[31m";
const yellow = "\x1b[33m";
const green = "\x1b[32m";
const blue = "\x1b[34m";
const purple = "\x1b[35m";
const cyan = "\x1b[36m";
const white = "\x1b[37m";
const reset = "\x1b[0m";

export function colors(color: string): void {
  if (color == "black") {
    return black
  } else if (color == "red") {
    return red
  } else if (color == "yellow") {
    return yellow
  } else if (color == "green") {
    return yellow
  } else if (color == "blue") {
    return blue
  } else if (color == "purple") {
    return purple
  } else if (color == "cyan" || color == "bright_blue") {
    return cyan
  } else if (color == "white") {
    return white
  } else if (color == "reset") {
    return reset
  } else {
    console.error(`'${color}' color does not exist!`);
  }
}
