function updateStudentGradeByCity(newList, city, newGrades) {
  newList.filter((value) => value.location === city)
  .map((value) => {
    grades = newGrades.filter((grades) => 
      grades.studentId === value.id);
    const newGrade = { 
      grades: grades.length !== 0 ? grades[0].grade : 'N/A'
    };
    return {...value, newGrade}
  })
}