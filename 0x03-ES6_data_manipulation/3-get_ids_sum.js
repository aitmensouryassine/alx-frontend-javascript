export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((prev, curr) => prev + curr.id, 0);
}
