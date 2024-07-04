interface Student {
    firstname: string;
    lastName: string;
    age: number;
    location: string;
};

const studentOne : Student = {
    firstname: 'judith',
    lastName: 'ukachukwu',
    age: 23,
    location: 'onitsha'
};

const studentTwo : Student = {
    firstname: 'Great',
    lastName: 'fellow',
    age: 29,
    location: 'oregon'
};
const studentList = [studentOne, studentTwo]

const renderTable = (array) => array.reduce((table, row) => table.appendChild(row.reduce((tr, tdata) => tr.appendChild(document.createElement('td').textContent = tdata), document.createElement('tr'))), document.createElement('table'))