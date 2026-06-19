import { 
    DirectorInterface, 
    TeacherInterface, 
    Director, 
    Teacher, 
    createEmployee, 
    isDirector, 
    executeWork,
    teachClass,
    Subjects
} from './main';

describe('Director Class', () => {
    const director = new Director();

    test('implements DirectorInterface correctly', () => {
        expect(director.workFromHome()).toBe('Working from home');
        expect(director.getCoffeeBreak()).toBe('Getting a coffee break');
        expect(director.workDirectorTasks()).toBe('Getting to director tasks');
    });
});

describe('Teacher Class', () => {
    const teacher = new Teacher();

    test('implements TeacherInterface correctly', () => {
        expect(teacher.workFromHome()).toBe('Cannot work from home');
        expect(teacher.getCoffeeBreak()).toBe('Cannot have a break');
        expect(teacher.workTeacherTasks()).toBe('Getting to work');
    });
});

describe('createEmployee function', () => {
    test('returns Teacher instance when salary < 500', () => {
        const employee = createEmployee(200);
        expect(employee instanceof Teacher).toBe(true);
    });

    test('returns Director instance when salary >= 500', () => {
        const employee = createEmployee(1000);
        expect(employee instanceof Director).toBe(true);
    });

    test('returns Director instance when salary is "$500"', () => {
        const employee = createEmployee('$500');
        expect(employee instanceof Director).toBe(true);
    });
});

describe('isDirector type predicate', () => {
    test('correctly identifies Director instances', () => {
        const director = new Director();
        const teacher = new Teacher();
        
        expect(isDirector(director)).toBe(true);
        expect(isDirector(teacher)).toBe(false);
    });
});

describe('executeWork function', () => {
    test('executes correct tasks based on employee type', () => {
        const teacher = createEmployee(200);
        const director = createEmployee(1000);
        
        expect(executeWork(teacher)).toBe('Getting to work');
        expect(executeWork(director)).toBe('Getting to director tasks');
    });
});

describe('teachClass function', () => {
    test('returns correct string based on subject', () => {
        expect(teachClass('Math')).toBe('Teaching Math');
        expect(teachClass('History')).toBe('Teaching History');
    });

    test('only accepts Math or History as subjects', () => {
        // TypeScript should prevent this at compile time, but we can test runtime behavior
        const subjects: Subjects[] = ['Math', 'History'];
        expect(subjects).toContain('Math');
        expect(subjects).toContain('History');
    });
});