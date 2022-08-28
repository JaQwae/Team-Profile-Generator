const Manager = require('../scripts/manager');

const testManager = new Manager('Tom', 1234, 'tomtest@gmail.com', 5678);

describe('Testing the Manager constructor values and associated methods', () => {

    it('test Manager constructor values', () => {
    expect(testManager.name).toBe('Tom');
    expect(testManager.id).toBe(1234);
    expect(testManager.email).toBe('tomtest@gmail.com');
    expect(testManager.officeNumber).toBe(5678);
    });

    it('test to see if getName() returns a name', () => {
        expect(testManager.getName()).toBe('Tom');
    });

    it('test to see if getId() returns a ID', () => {
        expect(testManager.getId()).toBe(1234);
    });

    it('test to see if getEmail() returns a Email', () => {
        expect(testManager.getEmail()).toBe('tomtest@gmail.com');
    });

    it('test to see if getOfficeNumber() returns the phone number', () => {
        expect(testManager.getOfficeNumber()).toBe(5678);
    });

})