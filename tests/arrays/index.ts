import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts";
import * as _ from "../../mod.ts";

Deno.test({
  name: "Removes correct index from array",
  fn: () => {
    const arr = [1, 2, 3, 4, 5];
    const result = _.arrays.remove(arr, 2);
    assertEquals(result, [1, 2, 4, 5]);
  }
});

Deno.test({
  name: "Gets correct array index",
  fn: () => {
    const arr = [1, 2, 3, 4, 5];
    const res1 = _.arrays.at<number>(arr, 0)
    const res2 = _.arrays.at<number>(arr, 4)
    assertEquals(res1, 1)
    assertEquals(res2, 5)
    
  }
})

