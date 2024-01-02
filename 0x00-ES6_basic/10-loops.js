export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const item of array) {
    arr[array.indexOf(item)] = appendString + item;
  }

  return arr;
}
