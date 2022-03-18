import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts";
import * as _ from "../../mod.ts";

Deno.test({
  name: "Read file content correctly",
  fn: async () => {
    const fp = new _.fs.types.Path("./tests/fs/text.txt");
    const filedata = await _.fs.read(fp);
    assertEquals(filedata, "Hello")
  }
});

Deno.test({
  name: "Checks if files or dir exists correctly",
  fn: async () => {
    const fp = new _.fs.types.Path("./tests/fs/text.txt");
    const doesExist = await _.fs.exists(fp);
    assertEquals(doesExist, true)
  }
})