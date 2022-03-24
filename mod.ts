// Strings

import { at } from "./src/strings/at.ts";
import { first } from "./src/strings/first.ts";
import { last } from "./src/strings/last.ts";
import { Char } from "./src/strings/types.ts";

// Arrays

import { remove } from "./src/arrays/remove.ts";
import { at as arr_at } from "./src/arrays/at.ts";

// Loggings

import { error } from "./src/logging/error.ts";
import { info } from "./src/logging/information.ts";
import { warn } from "./src/logging/warning.ts";

// FS

import { read } from "./src/fs/read.ts"

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

export const loggings = {
  err
}

export const fs = {
  read
}

// Language: typescript
