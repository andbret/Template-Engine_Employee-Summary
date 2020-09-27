// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager(name, id, email, officeNumber){
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.getRole = function(){
        return "Manager";
    }
    }
    const employee1 = new Manager("Bob", 1, "bob@email.com", "bobgit");
    module.exports = Manager;