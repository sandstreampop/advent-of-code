import { Solution1 } from "./1/solution-part-1.js";
import { Solution2 } from "./1/solution-part-2.js";

const input1 = await Deno.readTextFile("./1/input.txt");
console.log(`answer to day 1, part 1: ${Solution1(input1)}`);
console.log(`answer to day 1, part 2: ${Solution2(input1)}`);
