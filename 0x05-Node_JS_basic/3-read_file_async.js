fs = require('fs')

const countStudents = function(path) {
  const students = new Promise(function(resolve, reject) {
    fs.readFile(path, 'utf-8', function (err, data) {
      if (err) {
        reject("Cannot load the database"); // Reject the promise if there's an error
        return; // Prevent further execution
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
      resolve([filterArray, studentCs, studentSWE]);
    });
  })
  students
    .then(function(result) {
      console.log(`Number of students: ${result[0].length}`);
      console.log(`Number of students in CS: ${result[1].length}. List: ${result[1].join(', ')}`)
      console.log(`Number of students in SWE: ${result[2].length}. List: ${result[2].join(', ')}`)
    }).catch((error) => console.error(error))
}

module.exports = countStudents;
