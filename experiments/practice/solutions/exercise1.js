export function reverseString(str) {
  const arrFromString = str.split(" ");
  const reverseStringItem = arrFromString.map((item) => item.split("").reverse().join(""));
  return reverseStringItem.join(" ");
}
