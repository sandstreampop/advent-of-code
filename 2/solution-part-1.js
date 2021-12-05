export function Solution1(input) {
  const lines = input.split("\n");

  const { forward, up, down } = lines.reduce(
    (result, line) => {
      const [direction, distance] = line.split(" ");
      result[direction] += Number(distance);
      return result;
    },
    {
      forward: 0,
      up: 0,
      down: 0,
    }
  );

  const depth = down - up;
  const answer = forward * depth;

  return answer;
}
