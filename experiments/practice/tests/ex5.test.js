import { expect, test, describe, beforeAll } from "bun:test";
import { toLowerLetter } from "../solutions/exercise5";

describe("To lower case from upper case", () => {
	let string1;
	let string2;
	beforeAll(() => {
		string1 = "Hello world";
		string2 = "HFKJHGFHGHJ";
	});
	test("convert string", () => {
		expect(toLowerLetter(string1)).toEqual(string1.toLowerCase());
	});
	test("convert string2", () => {
		expect(toLowerLetter(string2)).toEqual(string2.toLowerCase());
	});
});
