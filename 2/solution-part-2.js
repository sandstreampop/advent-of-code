export function Solution2(input) {
  const lines = input.split("\n");

  const { horizontal, depth } = lines.reduce(movementReducer, {
    horizontal: 0,
		depth: 0,
		aim: 0,
  });

	const answer = horizontal * depth;

	return answer;
}

function movementReducer(result, line) {
	let [direction, distance] = line.split(" ");
	distance = Number(distance);

	switch (direction) {
		case "up": {
			result.aim -= distance;
			break;
		}
		case "down": {
			result.aim += distance;
			break;
		}
		case "forward": {
			result.horizontal += distance;
			result.depth += distance * result.aim;
			break;
		}
		default: {
			throw new Error(`Encountered an unexpected direction from line: ${line}`);
		}
	}

	return result;
}