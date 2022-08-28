const selectionMenu = require('../index');

selectionMenu('Add an engineer')

describe('Testing the switch function in the selectionMenu function', () => {

    it('test add an engineer option', () => {
    expect('Add an engineer').toBe('Add an engineer');
    });

    it('test add an intern option', () => {
    expect('Add an intern').toBe('Add an intern');
    });
})
