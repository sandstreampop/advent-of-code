export function Solution1(input) {
  const { mostCommon, leastCommon } = input
    .replaceAll("\n", "")
    .split("")
    .reduce(verticalLinesReducer, [])
    .reduce(countReducer, { mostCommon: "", leastCommon: "" });

  const gammaRate = parseInt(mostCommon, 2);
  const epsilonRate = parseInt(leastCommon, 2);

  const powerConsumption = gammaRate * epsilonRate;

  return powerConsumption;
}

function verticalLinesReducer(result, value, i) {
  if (result[i % 12] === undefined) result[i % 12] = [];

  result[i % 12].push(value);
  return result;
}

function countReducer(result, value) {
  const zeroesCount = value.filter((val) => val === "0").length;
  const onesCount = value.filter((val) => val === "1").length;

  result.mostCommon += Number(onesCount > zeroesCount);
  result.leastCommon += Number(zeroesCount > onesCount);

  return result;
}
