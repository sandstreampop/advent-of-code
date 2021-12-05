export function Solution2(input) {
  const lines = input.split("\n");

  const oxygenGeneratorRating = applyBitCriteria(lines, {
    preferMajority: true,
    preferZero: false,
  });
  const c02ScrubberRating = applyBitCriteria(lines, {
    preferMajority: false,
    preferZero: true,
  });

  const answer =
    parseInt(oxygenGeneratorRating, 2) * parseInt(c02ScrubberRating, 2);

  return answer;
}

function applyBitCriteria(lines, options, i = 0) {
  if (lines.length <= 1) return lines[0];

  const [zeroAtIndex, oneAtIndex] = split(lines, i);

  const sameLength = zeroAtIndex.length === oneAtIndex.length;
  const tieBreaker = options.preferZero ? zeroAtIndex : oneAtIndex;
  const majority =
    zeroAtIndex.length > oneAtIndex.length ? zeroAtIndex : oneAtIndex;
  const minority =
    zeroAtIndex.length > oneAtIndex.length ? oneAtIndex : zeroAtIndex;

  const selectedLines = sameLength
    ? tieBreaker
    : options.preferMajority
    ? majority
    : minority;

  return applyBitCriteria(selectedLines, options, i + 1);
}

function split(lines, i) {
  return lines.reduce(
    (result, line) => {
      result[line[i]].push(line);
      return result;
    },
    [[], []]
  );
}
