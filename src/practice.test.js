import { getRedFruitsWithPriceLessThanTen } from "./practice.js";

test("returns an empty array when no fruits meet the criteria", () => {
  const fruits = [
    { name: "apple", color: "green", price: 5.0 },
    { name: "banana", color: "yellow", price: 8.0 },
    { name: "grape", color: "purple", price: 12.0 },
  ];

  const result = getRedFruitsWithPriceLessThanTen(fruits);

  expect(result).toEqual([]);
});

test("returns an array of red fruits with price less than 10.00", () => {
  const fruits = [
    { name: "apple", color: "red", price: 5.0 },
    { name: "cherry", color: "red", price: 7.5 },
    { name: "strawberry", color: "red", price: 9.99 },
    { name: "banana", color: "yellow", price: 8.0 },
    { name: "grape", color: "purple", price: 12.0 },
  ];

  const result = getRedFruitsWithPriceLessThanTen(fruits);

  expect(result).toEqual([
    { name: "apple", color: "red", price: 5.0 },
    { name: "cherry", color: "red", price: 7.5 },
    { name: "strawberry", color: "red", price: 9.99 },
  ]);
});

test("returns an empty array when no fruits meet the criteria", () => {
  const fruits = [
    { name: "apple", color: "green", price: 5.0 },
    { name: "banana", color: "yellow", price: 8.0 },
    { name: "grape", color: "purple", price: 12.0 },
  ];

  const result = getRedFruitsWithPriceLessThanTen(fruits);

  expect(result).toEqual([]);
});

test("returns an array of red fruits with price less than 10.00", () => {
  const fruits = [
    { name: "apple", color: "red", price: 5.0 },
    { name: "cherry", color: "red", price: 7.5 },
    { name: "strawberry", color: "red", price: 9.99 },
    { name: "banana", color: "yellow", price: 8.0 },
    { name: "grape", color: "purple", price: 12.0 },
  ];

  const result = getRedFruitsWithPriceLessThanTen(fruits);

  expect(result).toEqual([
    { name: "apple", color: "red", price: 5.0 },
    { name: "cherry", color: "red", price: 7.5 },
    { name: "strawberry", color: "red", price: 9.99 },
  ]);
});

test("returns an empty array when no red fruits with price less than 10.00", () => {
  const fruits = [
    { name: "apple", color: "green", price: 5.0 },
    { name: "banana", color: "yellow", price: 8.0 },
    { name: "grape", color: "purple", price: 12.0 },
  ];

  const result = getRedFruitsWithPriceLessThanTen(fruits);

  expect(result).toEqual([]);
});

test("returns an empty array when no fruits are provided", () => {
  const fruits = [];

  const result = getRedFruitsWithPriceLessThanTen(fruits);

  expect(result).toEqual([]);
});
