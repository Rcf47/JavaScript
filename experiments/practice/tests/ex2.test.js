import { test, expect, describe, beforeAll } from "bun:test";
import { sortedArray } from "../solutions/exercise2";

describe("Sorted name array", () => {
	let arrNames1;
	let arrHeights1;
	let solution1;
	let arrNames2;
	let arrHeights2;
	let solution2;
	beforeAll(() => {
		arrNames1 = ["Pasha", "Masha", "Vanya"];
		arrHeights1 = [175, 168, 184];
		solution1 = ["Vanya", "Pasha", "Masha"];
		arrNames2 = ["Anton", "Ivan", "Kate", "Vadim"];
		arrHeights2 = [165, 153, 176, 188];
		solution2 = ["Vadim", "Kate", "Anton", "Ivan"];
	});
	test("sorted array with 3 items", () => {
		expect(sortedArray(arrNames1, arrHeights1)).toEqual(solution1);
	});
	test("sorted array with 4 items", () => {
		expect(sortedArray(arrNames2, arrHeights2)).toEqual(solution2);
	});
});
