// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");
class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
this.github = github;
    }
getRole(){return "Engineer"};
getGithub(){return this.github}
}
// const employee1 = new Engineer("Bob", 1, "bob@email.com", "bobgit")
module.exports = Engineer;