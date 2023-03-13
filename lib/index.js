/**
 * Given a string, finds if contains a certain substring and replace every substring found in the initial string with another string.
 *
 * One such example would be replacing "abc" with "" from "Test abc test test abc test test test abc test test abc".
 *
 * @param {text} text a given string in which it is checked if a certain substring appears that must be replaced with another string
 * @param {find} find a substring which, if it appears in the initial string, must be replaced
 * @param {replace} replace a string that must replace every substring found in the initial string
 * @returns the given string with the searched substring replaced everywhere
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function replaceall(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

module.exports = {
  replaceall,
};
