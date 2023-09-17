import { expect, test, describe, beforeAll } from "bun:test";
import { checkLongSentence } from "../solutions/exercise4";

describe("Long sentence", () => {
	let arrSentenceString1;
	let arrSentenceString2;
	beforeAll(() => {
		arrSentenceString1 = [
			"Hello my friend",
			"How you doing with this",
			"I'm glad to see you. Hope you are fine.",
		];
		arrSentenceString2 = ["My friend", "Where are you", "Today are good day", "One string", ""];
	});
	test("check long sentence arr1", () => {
		expect(checkLongSentence(arrSentenceString1)).toBe(9);
	});
	test("check long sentence arr2", () => {
		expect(checkLongSentence(arrSentenceString2)).toBe(4);
	});
});
