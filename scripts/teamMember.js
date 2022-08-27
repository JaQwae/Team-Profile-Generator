class TeamMember {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // console log values (test only)
    consoleValues(){
        console.log(`${this.name}`);
        console.log(`${this.id}`);
        console.log(`${this.email}`);
    }
    
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }
}

module.exports = TeamMember;