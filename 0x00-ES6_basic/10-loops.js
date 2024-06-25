export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const [idx, value] of array.entries()) {
    newArr[idx] = appendString + value;
  }

  return newArr;
}
