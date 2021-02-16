class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { };
    getId() { };
    getEmail() { };
    getRole() { return this.constructor.name; };
}

module.exports = { Employee };