const Intern = require('../lib//intern');

const testIntern = new Intern('Tom', 1234, 'tomtest@gmail.com', 'A&M');

describe('Testing the Manager constructor values and associated methods', () => {

    it('test Intern constructor values', () => {
    expect(testIntern.name).toBe('Tom');
    expect(testIntern.id).toBe(1234);
    expect(testIntern.email).toBe('tomtest@gmail.com');
    expect(testIntern.school).toBe('A&M');
    });

    it('test to see if getName() returns a name', () => {
        expect(testIntern.getName()).toBe('Tom');
    });

    it('test to see if getId() returns a ID', () => {
        expect(testIntern.getId()).toBe(1234);
    });

    it('test to see if getEmail() returns a Email', () => {
        expect(testIntern.getEmail()).toBe('tomtest@gmail.com');
    });

    it('test to see if getSchool() returns inputted school', () => {
        expect(testIntern.getSchool()).toBe('A&M');
    });

})