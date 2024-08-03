interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [index: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}



interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = 
function(firstName: string, lastName: string): string  {
    return `${firstName.slice(0,1)}.${lastName}`
}

console.log(printTeacher('judith', 'june'))