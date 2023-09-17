export function toSumAllNumbers(number) {
	if (number < 3) {
		throw new Error("Wrong number");
	}
	let sum = 0;
	for (let i = 3; i <= number; i++) {
		if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
			sum += i;
		}
	}
	return sum;
}
