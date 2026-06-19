import { Teacher, Directors, printTeacher, StudentClass } from './main';

describe('Teacher Interface', () => {
    const teacher3: Teacher = {
        firstName: 'John',
        lastName: 'Doe',
        fullTimeEmployee: false,
        location: 'London',
        contract: false,
    };

    test('teacher3 has correct properties', () => {
        expect(teacher3.firstName).toBe('John');
        expect(teacher3.lastName).toBe('Doe');
        expect(teacher3.fullTimeEmployee).toBe(false);
        expect(teacher3.location).toBe('London');
        expect(teacher3.contract).toBe(false);
    });

    test('teacher can have additional attributes', () => {
        const teacherWithExtra: Teacher = {
            firstName: 'Jane',
            lastName: 'Smith',
            fullTimeEmployee: true,
            location: 'Paris',
            extraAttribute: 'value'
        };
        expect(teacherWithExtra.extraAttribute).toBe('value');
    });
});

describe('Directors Interface', () => {
    const director1: Directors = {
        firstName: 'John',
        lastName: 'Doe',
        location: 'London',
        fullTimeEmployee: true,
        numberOfReports: 17,
    };

    test('director1 has correct properties', () => {
        expect(director1.firstName).toBe('John');
        expect(director1.lastName).toBe('Doe');
        expect(director1.location).toBe('London');
        expect(director1.fullTimeEmployee).toBe(true);
        expect(director1.numberOfReports).toBe(17);
    });
});

describe('printTeacher function', () => {
    test('prints teacher name in correct format', () => {
        expect(printTeacher("John", "Doe")).toBe("J. Doe");
        expect(printTeacher("Alice", "Smith")).toBe("A. Smith");
    });
});

describe('StudentClass', () => {
    const student = new StudentClass("John", "Doe");

    test('student instance has correct properties', () => {
        expect(student.firstName).toBe("John");
        expect(student.lastName).toBe("Doe");
    });

    test('workOnHomework method returns correct string', () => {
        expect(student.workOnHomework()).toBe("Currently working");
    });

    test('displayName method returns firstName', () => {
        expect(student.displayName()).toBe("John");
    });
});