/**
 * Find the first instance of an element that meets a specified condition in an array
 * @template T
 * @param {T[]} inputArray - [type T]
 * @param {(element: T) => boolean} condition - [a condition that will return a boolean expression when fed an element]
 * @returns {T|undefined} firstInstance <first instance of element in the array that meets condition>
 */

const findFirst = (inputArray, condition) => {
  for (let element of inputArray) {
    if (condition(element)) {
      return element;
    }
  }
  return undefined;
};

export { findFirst };

/**
 * Find the first instance of an element that meets a specified condition in an array
 * @template T
 * @param {T[]} inputArray - The input array to search for the first instance
 * @param {(element: T) => boolean} condition - The condition function that determines if an element meets the specified condition
 * @returns {T|undefined} The first instance of an element that meets the condition, or undefined if no such element is found
 */
const findFirst2 = (inputArray, condition) => {
  for (let element of inputArray) {
    if (condition(element)) {
      return element;
    }
  }
  return undefined;
};

console.log(findFirst([1, 2, 3, 4, 5], (element) => element > 3)); // 4

console.log(findFirst2([1, 2, 3, 4, 5], (element) => element > 2)); // 3
