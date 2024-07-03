export default function updateStudentGradeByCity(listOfStud, city, newGrades) {
  return arr
    .filter(({ location }) => location === city)
    .map((obj) => {
      const targetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = targetNewGrade.length > 0 ? targetNewGrade[0] : {};
      return { ...obj, grade };
    });
}
