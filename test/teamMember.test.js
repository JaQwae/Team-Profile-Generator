const TeamMember = require('../lib//teamMember');

const testMember = new TeamMember('Tom', 1234, 'tomtest@gmail.com');


describe('Testing the TeamMember constructor values and associated methods', () => {

    it('test TeamMembers constructor values', () => {
    expect(testMember.name).toBe('Tom');
    expect(testMember.id).toBe(1234);
    expect(testMember.email).toBe('tomtest@gmail.com');
    });

    it('test to see if getName() returns a name', () => {
        expect(testMember.getName()).toBe('Tom');
    });

    it('test to see if getId() returns a ID', () => {
        expect(testMember.getId()).toBe(1234);
    });

    it('test to see if getEmail() returns a Email', () => {
        expect(testMember.getEmail()).toBe('tomtest@gmail.com');
    });

})