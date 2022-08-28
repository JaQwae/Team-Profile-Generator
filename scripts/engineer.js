const TeamMember = require("./teamMember");

class Engineer extends TeamMember {

    constructor (name, id, email, gitHub) {
        super(name, id, email);
        
        this.gitHub = gitHub;
    }
    
    getGitHub() {
        return this.gitHub;
    }

    position() {
        return 'Engineer';
    }
}

module.exports = Engineer;