/**
 * Find the first instance of an element that meets a specified condition in an array
 * 
 * @param {number[]} inputArray - [type T]
 * @param {predicateFunction} condition - [a condition that will return a boolean expression when fed an element]
 * @returns {number|undefined} firstInstance <first instance of element in the array that meets condition> 
 */

const findFirst = (inputArray, condition) => {
    for (let element of inputArray) {
        if (condition(element)) {
            return element;
        }
    }
    return undefined;
}


export { findFirst }