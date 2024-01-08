export default function hasValuesFromArray(_set, _array) {
  for (let i = 0; i < _array.length; i += 1) {
    if (!_set.has(_array[i])) {
      return false;
    }
  }
  return true;
}
