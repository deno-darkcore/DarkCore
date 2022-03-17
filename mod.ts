// Strings

import { at } from "./src/strings/at.ts";
import { first } from "./src/strings/first.ts";
import { last } from "./src/strings/last.ts";
import { Char } from "./src/strings/types.ts";

// Arrays

import { remove } from "./src/arrays/remove.ts";
import { at as arr_at } from "./src/arrays/at.ts"

// Exports

export const strings = {
  types: {
    char: Char,
  },
  at,
  first,
  last,
};

export const arrays = {
  remove,
  at: arr_at
}

// Language: typescript