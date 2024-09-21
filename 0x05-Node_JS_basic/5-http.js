const csvFile = process.argv[2];
const http = require('http');
const countStud = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  // deconstruct the request
  const { url, method } = req;
  // return plain text
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  // if url path is / displays ...
  if (method === 'GET' && url === '/') {
    res.end('Hello Holberton School!');
  } else if (csvFile && url === '/students') {
  // if url path is /students displays the content of csv file
    countStud(csvFile)
      .then((result) => {
        const response = `This is the list of our students\nNumber of students: ${result[0].length}\nNumber of students in CS: ${result[1].length}. List: ${result[1].join(', ')}\nNumber of students in SWE: ${result[2].length}. List: ${result[2].join(', ')}`;
        res.end(response);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('This is the list of our students\nNumber of students: 10\nNumber of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\nNumber of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
  }
});

app.listen(port);

module.exports = app;
