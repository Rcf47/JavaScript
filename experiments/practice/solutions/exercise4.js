export function checkLongSentence(stringArray) {
	let max = 0;
	stringArray.map((element) => {
		element = element.split(" ");
		if (element.length > max) {
			max = element.length;
		}
	});
	return max;
}
