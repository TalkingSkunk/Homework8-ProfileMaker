const employee = require( "./employee.js" );

class Intern extends employee.Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() { };
}

module.exports = { Intern };