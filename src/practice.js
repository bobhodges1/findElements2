/**
 * Returns an array of fruits that have a color of red and a price less than 10.00.
 *
 * @param {Array} fruits - The array of fruits to iterate over.
 * @returns {Array} - An array of fruits that meet the specified criteria.
 */
// write a function which iterates over an array of objects and returns all fruits which have a color of red
// and a price of less than 10.00.
//  */
function getRedFruitsWithPriceLessThanTen(fruits) {
  return fruits.filter((fruit) => fruit.color === "red" && fruit.price < 10.0);
}

export { getRedFruitsWithPriceLessThanTen };
