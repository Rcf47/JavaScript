import { test, expect, describe } from "bun:test";
import { reverseString } from "../solutions/exercise1";

describe("ex1, reverse string", () => {
  test("Hello", () => {
    expect(reverseString("Hello")).toBe("olleH")
  });
  test("Hello world", () => {
    expect(reverseString("Hello world")).toBe("olleH dlrow")
  })
})
