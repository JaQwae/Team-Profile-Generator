const Manager = require('../scripts/teamManager');

const testManager = new Manager('Randy', 1234, 'randytest@gmail.com', 5678);

describe('Testing the Manager constructor values and associated methods', () => {

    it('test Manager constructor values', () => {
    expect(testManager.name).toBe('Randy');
    expect(testManager.id).toBe(1234);
    expect(testManager.email).toBe('randytest@gmail.com');
    expect(testManager.officeNumber).toBe(5678);
    });

    it('test to see if getName() returns a name', () => {
        expect(testManager.getName()).toBe('Randy');
    });

    it('test to see if getId() returns a ID', () => {
        expect(testManager.getId()).toBe(1234);
    });

    it('test to see if getEmail() returns a Email', () => {
        expect(testManager.getEmail()).toBe('randytest@gmail.com');
    });

    it('test to see if getOfficeNumber() returns the phone number', () => {
        expect(testManager.getOfficeNumber()).toBe(5678);
    });

})