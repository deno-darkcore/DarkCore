import { Path } from "./types.ts"

export async function exists(file: Path): Promise<boolean> {
  try {
    await Deno.lstat(file.toString());
    return true;
  } catch(err) { // TODO: Add err checker
    if (err instanceof Deno.errors.NotFound) {
      return false;
    }
    throw err;
  }
}