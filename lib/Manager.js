const Employee = require("./Employee.js");
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
this.officeNumber = officeNumber;
    }
getRole(){return "Manager"};
getOfficeNumber(){return this.officeNumber}
}
// const employee1 = new Manager("Bob", 1, "bob@email.com", "bobgit")
module.exports = Manager;