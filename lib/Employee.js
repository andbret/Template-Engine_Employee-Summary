// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
this.name = name;
this.id = id;
this.email = email;
    }
    getRole(){return "Employee"};
    getName(){return this.name};
    getId(){return this.id};
    getEmail(){return this.email};
}
const employee1 = new Employee("Bob", 1, "bob@email.com", "bobgit")
module.exports = Employee;