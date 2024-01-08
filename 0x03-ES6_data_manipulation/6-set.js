export default function setFromArray(arr) {
  const setFromArr = new Set();
  arr.forEach((element) => setFromArr.add(element));
  return setFromArr;
}
