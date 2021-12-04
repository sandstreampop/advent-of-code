import { Solution1 as Day1Solution1 } from "./1/solution-part-1.js";
import { Solution2 as Day1Solution2 } from "./1/solution-part-2.js";
import { Solution1 as Day2Solution1 } from "./2/solution-part-1.js";

const day1Input = await Deno.readTextFile("./1/input.txt");
console.log(`answer to day 1, part 1: ${Day1Solution1(day1Input)}`);
console.log(`answer to day 1, part 2: ${Day1Solution2(day1Input)}`);

const day2Input = await Deno.readTextFile("./2/input.txt");
console.log(`answer to day 2, part 1: ${Day2Solution1(day2Input)}`);

