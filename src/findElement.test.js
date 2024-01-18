import { findFirst } from "./findElement.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("find first instance of an odd number in inputArray", () => {
    expect(findFirst([2,3,5], (n) => n % 2 === 1)).toBe(3);
});

test("find first instance of a short string in inputArray", () => {
    expect(findFirst(["banana", "dragonfruit", "plum","mango"], (n) => n % 2 === 1)).toBe("plum");
});