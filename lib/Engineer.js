// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email, github){
this.name = name;
this.id = id;
this.email = email;
this.github = github;
this.getRole = function(){
    return "Engineer";
}
}
const employee1 = new Engineer("Bob", 1, "bob@email.com", "bobgit")
module.exports = Engineer;