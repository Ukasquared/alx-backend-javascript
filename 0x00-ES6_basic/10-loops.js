export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, val] of array.entries()) {
    let value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
