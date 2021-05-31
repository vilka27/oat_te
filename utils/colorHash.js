/**
 *
 * @param {String} arg
 * @param {Number} mod
 * @returns {Number}
 */
function getStringHash(arg, mod) {
  const sum = arg.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return sum % mod;
}
/**
 *
 * @param {String} arg
 * @returns {Number}
 */
function getStringHue(arg) {
  return getStringHash(arg, 256);
}
/**
 *
 * @param {any} arg
 * @returns {String} hsl color string
 */
export default function getStringColor(arg) {
  return `hsl(${getStringHue(arg.toString())},100%,79%)`;
}
