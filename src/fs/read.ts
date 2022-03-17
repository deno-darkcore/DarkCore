export async function read(fp: string): Promise<string> { // TODO: Create a path type
  const bytes = await Deno.readFile(fp);
  return new TextDecoder().decode(bytes);
}

