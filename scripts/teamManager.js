
const TeamMember = require('./teamMember');

class Manager extends TeamMember {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }

    // console log values (test only)
    consoleValues(){
        console.log(`${this.name}`);
        console.log(`${this.id}`);
        console.log(`${this.email}`);
        console.log(`${this.officeNumber}`);
    }
    
    // getName(){
    //     return this.name;
    // }

    // getId(){
    //     return this.id;
    // }

    // getEmail(){
    //     return this.email;
    // }
}

const randy = new Manager('randy', 1234, 'test', 4521);
randy.consoleValues();
module.exports = Manager;