import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

describe('Testing all subjects', () => {
  const cpp = new Cpp();
  const java = new Java();
  const react = new React();

  const cTeacher: Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
    experienceTeachingJava: 10,
    experienceTeachingReact: 10
  };

  test('Testing Cpp subject', () => {
    cpp.setTeacher(cTeacher);
    expect(cpp.getRequirements()).toBe('Here is the list of requirements for Cpp');
    expect(cpp.getAvailableTeacher()).toBe('Available Teacher: Guillaume');
  });

  test('Testing Java subject', () => {
    java.setTeacher(cTeacher);
    expect(java.getRequirements()).toBe('Here is the list of requirements for Java');
    expect(java.getAvailableTeacher()).toBe('Available Teacher: Guillaume');
  });

  test('Testing React subject', () => {
    react.setTeacher(cTeacher);
    expect(react.getRequirements()).toBe('Here is the list of requirements for React');
    expect(react.getAvailableTeacher()).toBe('Available Teacher: Guillaume');
  });
});
