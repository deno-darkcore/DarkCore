import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts";
import * as _ from '../../mod.ts';

Deno.test({name: "Returns first char in string", fn: () => {
	assertEquals("H", _.strings.first("Hello"));
	assertEquals("W", _.strings.first("World"));
}});

Deno.test({name: "Returns last char in string", fn: () => {
	assertEquals("o", _.strings.last("Hello"));
	assertEquals("d", _.strings.last("World"));
}});

Deno.test({name: "Returns correct position of char", fn: () => {
	assertEquals("C", _.strings.at("DarkCore", 5));
	assertEquals(undefined, _.strings.at("DarkCore", 10));
}})

/**
 * Speed statistics
 * NOTE: Will move to docs soon 
 * first: {
 *   Actually a quite long compared to last, average 1-3 MS longer(biggest being 30 ms!)
 * }
 * last: {
 *   Fast! Average 0-2 ms!
 * }
 */