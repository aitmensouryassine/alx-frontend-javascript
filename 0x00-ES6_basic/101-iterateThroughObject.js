export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  const iterator = reportWithIterator[Symbol.iterator]();

  let next = iterator.next();

  while (!next.done) {
    const employee = next.value;
    next = iterator.next();

    const pipe = next.done ? '' : ' | ';
    employees += employee + pipe;
  }

  return employees;
}
