// @ts-check


function arrayToNum(numArray) {
  let numStr = ""
  for (let i=0; i < numArray.length; i++) {
    numStr += numArray[i];
  }
  return Number(numStr)
}
/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return arrayToNum(array1) + arrayToNum(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reversed = String(value).split("").reverse().join("");
  return String(value) == reversed
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

  let num = Number(input);
  console.log("Input: " + input + "| Result: " + num);

  if (input === undefined || input === null || input === "" ){
    return 'Required field'
  } else if (Number(input) === 0) {
    return "Must be a number besides 0";
  } else if (isNaN(Number(input)) === true) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
