const employee = require("./employee.js");

class Manager extends employee.Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() { };
}

module.exports = { Manager };