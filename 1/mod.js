import { Solution1 } from "./solutions/solution-part-1.js";
import { Solution2 } from "./solutions/solution-part-2.js";

const input = await Deno.readTextFile("./input.txt");

console.log(`answer to day 1, part 1: ${Solution1(input)}`);
console.log(`answer to day 1, part 2: ${Solution2(input)}`);
