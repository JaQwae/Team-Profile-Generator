const TeamMember = require("./teamMember");

class Intern extends TeamMember {

    constructor (name, id, email, school) {
        super(name, id, email);
        
        this.school = school;
    }
    
    getSchool() {
        return this.school;
    }

    position() {
        return 'Intern';
    }
}

module.exports = Intern;