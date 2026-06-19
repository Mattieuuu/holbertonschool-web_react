import { Student, studentsList, renderTable } from './main';

describe('Student Interface and Table Rendering', () => {
    document.body.innerHTML = '';
    
    test('studentsList contains two students', () => {
        expect(studentsList.length).toBe(2);
    });

    test('student1 has correct properties', () => {
        expect(studentsList[0].firstName).toBe('John');
        expect(studentsList[0].location).toBe('London');
    });

    test('student2 has correct properties', () => {
        expect(studentsList[1].firstName).toBe('Jane');
        expect(studentsList[1].location).toBe('Paris');
    });

    test('table renders correctly', () => {
        renderTable();
        const table = document.querySelector('table');
        const rows = document.querySelectorAll('tr');
        
        expect(table).toBeTruthy();
        expect(rows.length).toBe(2);
        
        // Check first student row
        expect(rows[0].children[0].textContent).toBe('John');
        expect(rows[0].children[1].textContent).toBe('London');
        
        // Check second student row
        expect(rows[1].children[0].textContent).toBe('Jane');
        expect(rows[1].children[1].textContent).toBe('Paris');
    });
});