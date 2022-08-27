class TeamMember {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // console log values
    consoleValues(){
        console.log(`${this.name}`);
        console.log(`${this.id}`);
        console.log(`${this.email}`);
    }
}

module.exports = TeamMember;