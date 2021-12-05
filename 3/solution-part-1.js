export function Solution1(input) {
  return input
    .replaceAll("\n", "")
    .split("")
    .reduce(verticalLinesReducer, [])
    .reduce(mostAndLeastCommonReducer, ["", ""])
    .reduce(powerConsumptionReducer, 1);
}

function verticalLinesReducer(result, value, i) {
  if (result[i % 12] === undefined) result[i % 12] = [];

  result[i % 12].push(value);
  return result;
}

function mostAndLeastCommonReducer(result, value) {
  const zeroesCount = value.filter((val) => val === "0").length;
  const onesCount = value.filter((val) => val === "1").length;

  result[0] += Number(onesCount > zeroesCount);
  result[1] += Number(zeroesCount > onesCount);

  return result;
}

function powerConsumptionReducer(result, value) {
  return result * parseInt(value, 2);
}
