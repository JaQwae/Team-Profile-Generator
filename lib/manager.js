
const TeamMember = require('./teamMember');

class Manager extends TeamMember {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber() {
        return this.officeNumber;
    }

    position() {
        return 'Manager';
    }

}

module.exports = Manager;