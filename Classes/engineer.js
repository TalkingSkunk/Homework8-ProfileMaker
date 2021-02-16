const employee = require("./employee.js");

class Engineer extends employee.Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() { return this.github };
}

module.exports = { Engineer };