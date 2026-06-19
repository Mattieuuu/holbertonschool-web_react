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

export { Student, studentsList, renderTable };

renderTable();
