const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const html = render(employees);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt([
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name",
        default: "Andrew"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "id",
        default: "1"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "email",
        default: "default@email.com"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber",
        default: "1"
    
    
    // What is your manager's name?
    // What is your manager's id?
    // What is your manager's email?
    // What is your manager's office number?

    // Which type of team member would you like to add? (use arrow keys)
    // Engineer
    // Intern
    // I dont want to add any more members
}]).then(function(managerAnswers){
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
employees.push(manager);

makeNewEmployees()

});
function makeNewEmployees(){
inquirer.prompt([{
    
        type: "list",
        message: "Which type of team member would you like to add? (use arrow keys)",
        name: "type",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more members."     
            
        ],
        default: "I don't want to add any more members."
    // Which type of team member would you like to add? (use arrow keys)
     // Engineer
     // intern
     // I don't want to add any more members.
 
 }]).then(function(typeAnswers){
     if(typeAnswers.type === "Engineer"){
         inquirer.prompt([{
                 
            type: "input",
            message: "What is your engineer's name?",
            name: "name",
            default: "Andrew"
        },
        {
            type: "input",
            message: "What is your engineer's ID?",
            name: "id",
            default: "1"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email",
            default: "default@email.com"
        },
        {
            type: "input",
            message: "What is your engineer's GitHub?",
            name: "github",
            default: "defaultgit"
     // what is your Engineer's name?
     // what is your Engineer's id?
     // what is your Engineer's email?
     // what is your Engineer's github?
          
          }]).then(function(engineerAnswers){
             const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
             employees.push(engineer);
             makeNewEmployees()
          });
 
     } else if(typeAnswers === "Intern"){
         inquirer.prompt([{
            type: "input",
            message: "What is your intern's name?",
            name: "name",
            default: "Andrew"
        },
        {
            type: "input",
            message: "What is your intern's ID?",
            name: "id",
            default: "1"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email",
            default: "default@email.com"
        },
        {
            type: "input",
            message: "what school does your intern attend?",
            name: "school",
            default: "defaultgit"
             // what is your Intern's name?
             // what is your Intern's id?
             // what is your Intern's email?
             // what school does the Intern attend?
                  
                  }]).then(function(internAnswers){
                     const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                     employees.push(intern);
                     makeNewEmployees()
                  });
     } else {
         // render everything
         fs.writeFile(outputPath, html, function(err){
         if(err)
             throw err;
             console.log("success!");
         
         });
     }
 

});
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
