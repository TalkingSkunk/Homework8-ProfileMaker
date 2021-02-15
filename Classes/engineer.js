const employee = require("./employee.js");

class Engineer extends employee.Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.github = gitHub;
    }
    getGithub() { };
}

module.exports = { Engineer };