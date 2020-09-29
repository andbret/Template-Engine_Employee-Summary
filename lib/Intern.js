const Employee = require("./Employee.js");
class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
this.school = school;
    }
getRole(){return "Intern"};
getSchool(){return this.school}
}
// const employee1 = new Intern("Bob", 1, "bob@email.com", "bobgit")
module.exports = Intern;