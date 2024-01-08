export default function cleanSet(_set, startString) {
  let result = '';
  if (startString && typeof startString === 'string') {
    let i = 0;
    for (const value of _set) {
      if (value && value.startsWith(startString)) {
        const sep = i !== 0 ? '-' : '';
        result += `${sep}${value.slice(startString.length, value.length)}`;
        i += 1;
      }
    }
  }
  return result;
}
