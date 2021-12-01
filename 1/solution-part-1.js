const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n").map((line) => Number(line));

const { answer } = lines.reduce(
  ({ answer, lastLine }, currentLine) => ({
    answer: lastLine !== null && currentLine > lastLine ? answer + 1 : answer,
    lastLine: currentLine,
  }),
  {
    answer: 0,
    lastLine: null,
  }
);

console.log(`answer to day 1, part 1: ${answer}`);
