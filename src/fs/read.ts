import { Path } from "./types.ts"

export async function read(file: Path): Promise<string> { // TODO: Create a path type
  const bytes = await Deno.readFile(file.toString());
  return new TextDecoder().decode(bytes);
}

