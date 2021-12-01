export function Solution2(input) {
  const lines = input.split("\n").map((line) => Number(line));

  const chunkedLines = ((lines, chunkSize) => {
    const result = [];
    for (let i = 0; i < lines.length; i++) {
      const chunk = lines.slice(i, i + chunkSize);
      if (chunk.length === 3) {
        result.push(chunk);
      }
    }
    return result;
  })(lines, 3);

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

  return answer;
}
