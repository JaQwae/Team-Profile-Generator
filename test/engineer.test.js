const Engineer = require('../lib/engineer');

const testEngineer = new Engineer('Tom', 1234, 'tomtest@gmail.com', 'Tom GitHub');

describe('Testing the Manager constructor values and associated methods', () => {

    it('test Engineer constructor values', () => {
    expect(testEngineer.name).toBe('Tom');
    expect(testEngineer.id).toBe(1234);
    expect(testEngineer.email).toBe('tomtest@gmail.com');
    expect(testEngineer.gitHub).toBe('Tom GitHub');
    });

    it('test to see if getName() returns a name', () => {
        expect(testEngineer.getName()).toBe('Tom');
    });

    it('test to see if getId() returns a ID', () => {
        expect(testEngineer.getId()).toBe(1234);
    });

    it('test to see if getEmail() returns a Email', () => {
        expect(testEngineer.getEmail()).toBe('tomtest@gmail.com');
    });

    it('test to see if getGitHub() returns the GitHub user name', () => {
        expect(testEngineer.getGitHub()).toBe('Tom GitHub');
    });
})