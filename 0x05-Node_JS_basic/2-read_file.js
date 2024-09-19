fs = require('fs')

const countStudents = function(path) {
  fs.readFile(path, 'utf-8', function (err, data) {
    if (err) {
      console.log('Cannot load the database');
    }
    const myArray = data.split('\n');
    const filterArray = myArray.filter(item => item !== "")
    filterArray.shift()
    filterArray.forEach(function(value, index, arr) {
      arr[index] = value.split(',');
    })
    const studentCs = []
    const studentSWE = []
    filterArray.forEach(function(value, index) {
      if (value.includes('CS')) {
        studentCs.push(value.shift());
      } else if (value.includes('SWE')) {
        studentSWE.push(value.shift());
      }
    })
    console.log(`Number of students: ${filterArray.length}`);
    console.log(`Number of students in CS: ${studentCs.length}. List: ${studentCs.join(', ')}`)
    console.log(`Number of students in SWE: ${studentSWE.length}. List: ${studentSWE.join(', ')}`)
  })
}

countStudents('database.csv')
