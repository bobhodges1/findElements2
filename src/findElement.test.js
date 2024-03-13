import { findFirst } from "./main.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("find first instance of an odd number in inputArray", () => {
  expect(findFirst([2, 3, 5], (n) => n % 2 === 1)).toBe(3);
});

test("find first instance of a short string in inputArray", () => {
  const fruitList = ["banana", "dragonfruit", "plum", "mango"];
  const isShort = (fruit) => fruit.length < 5;
  expect(findFirst(fruitList, isShort)).toBe("plum");
});
// let x = findFirst([2,6,8,9],s => s % 2 === 1)
