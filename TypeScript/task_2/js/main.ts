interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "London"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Paris"
};

const studentsList: Array<Student> = [student1, student2];

function renderTable(): void {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    studentsList.forEach((student: Student) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        nameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(nameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Teacher | Director): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`;
}

export {
    DirectorInterface,
    TeacherInterface,
    Director,
    Teacher,
    createEmployee,
    isDirector,
    executeWork,
    teachClass,
    Subjects
};

