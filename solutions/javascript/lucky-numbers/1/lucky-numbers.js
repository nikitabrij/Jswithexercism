// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const a1 = Number(array1.join(""));
  const a2 = Number(array2.join(""));

  return a1 + a2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const str = value.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return 'Required field'
  }
  const num = Number(input)
  if (!num) {
    return "Must be a number besides 0"
  }
  return ''
}
