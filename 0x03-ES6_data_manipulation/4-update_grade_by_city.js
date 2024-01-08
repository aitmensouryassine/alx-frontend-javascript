export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const studentWithGrade = newGrades.find((grade) => grade.studentId === student.id);

      if (studentWithGrade) {
        return {
          ...student,
          grade: studentWithGrade.grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
}
