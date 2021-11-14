import { at } from "./src/strings/at.ts";
import { first } from "./src/strings/first.ts";
import { last } from "./src/strings/last.ts";
import { Char } from "./src/strings/types.ts";

export const strings = {
  types: {
    char: Char,
  },
  at,
  first,
  last,
};

// Language: typescript