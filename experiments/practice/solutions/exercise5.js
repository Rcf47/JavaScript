export function toLowerLetter(string) {
	const stringArr = string.split("");
	const newStringArr = stringArr.map((element) => {
		if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
			element = String.fromCharCode(element.charCodeAt() + 32);
		}
		return element;
	});
	return newStringArr.join("");
}
