import { test, expect, describe } from "bun:test";
import { toSumAllNumbers } from "../solutions/exercise3";

describe("Sum all numbers devided by 3, 5, 7", () => {
	test("Sum for number 7", () => {
		expect(toSumAllNumbers(7)).toBe(21);
	});
	test("Sum for number 10", () => {
		expect(toSumAllNumbers(10)).toBe(40);
	});
	test("Check throw error", () => {
		expect(() => {
			toSumAllNumbers(2);
		}).toThrow("Wrong number");
	});
});
