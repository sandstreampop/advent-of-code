const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n").map((line) => Number(line));

const chunkedLines = ((lines, chunkSize) => {
  let result = [];
  for (let i = 0; i < lines.length; i++) {
    let chunk = lines.slice(i, i + chunkSize);
    if (chunk.length === 3) {
      result.push(chunk);
    }
  }
  return result;
})(lines, 3);

console.log(chunkedLines);

const { answer } = chunkedLines.reduce(
  ({ answer, lastChunk }, currentChunk) => ({
    answer:
      lastChunk !== null &&
      currentChunk.reduce((sum, number) => sum + number, 0) >
        lastChunk.reduce((sum, number) => sum + number, 0)
        ? answer + 1
        : answer,
    lastChunk: currentChunk,
  }),
  {
    answer: 0,
    lastChunk: null,
  }
);

console.log(`answer to day 1, part 2: ${answer}`);
