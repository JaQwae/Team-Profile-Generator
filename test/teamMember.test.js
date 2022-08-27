const TeamMember = require('../scripts/teamMember');

const testMember = new TeamMember('Tom', 1234, 'tomtest@gmail.com');

test('Test to see if the TeamMembers constructor is functioning properly', () => {
    expect(employee.name).toBe('Tom');
    expect(employee.id).toBe(1234);
    expect(employee.email).toBe('tomtest@gmail.com');
})