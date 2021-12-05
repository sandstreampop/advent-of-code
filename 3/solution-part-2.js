export function Solution2(input) {
  const lines = input.split("\n");

  const oxygenGeneratorRating = applyBitCriteria(lines, { preferZero: false });
  const c02ScrubberRating = applyBitCriteria(lines, { preferZero: true })

	return parseInt(oxygenGeneratorRating, 2) * parseInt(c02ScrubberRating, 2);
}

function applyBitCriteria(lines, options, i = 0) {
  if (lines.length <= 1) return lines[0];

  const [zeroAtIndex, oneAtIndex] = split(lines, i);

  const sameLength = zeroAtIndex.length === oneAtIndex.length;
  const majorityStartsWithZero = zeroAtIndex.length > oneAtIndex.length;

  const selected = options.preferZero
    ? sameLength
      ? zeroAtIndex
      : majorityStartsWithZero
      ? oneAtIndex
      : zeroAtIndex
    : sameLength
    ? oneAtIndex
    : majorityStartsWithZero
    ? zeroAtIndex
    : oneAtIndex;

  return applyBitCriteria(selected, options, i + 1);
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
