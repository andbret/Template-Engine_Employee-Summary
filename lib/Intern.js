// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Intern(name, id, email, school){
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.getRole = function(){
        return "Intern";
    }
    }
    const employee1 = new Intern("Bob", 1, "bob@email.com", "bobgit");
    module.exports = Intern;