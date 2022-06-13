const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateSite = require("./src/generateHTML.js");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name? (REQUIRED)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your id? (REQUIRED)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee id number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email? (REQUIRED)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number? (REQUIRED)",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select an option:",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Completed building my team",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "Add an engineer":
          promptEngineer();
          break;
        case "Add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`
  =================
  Add a New Engineer
  =================
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the engineer? (REQUIRED)",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter the name of your engineer!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the id of this engineer? (REQUIRED)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log(
              "Please enter the employee id number of this engineer!"
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address of this engineer? (REQUIRED)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter the email address of this engineer!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the github username of this engineer? (REQUIRED)",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter the Github username of this engineer!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
  console.log(`
  =================
  Add a New Intern
  =================
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the intern? (REQUIRED)",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter the name of your intern!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the id of this intern? (REQUIRED)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter the employee id number of this intern!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address of this intern? (REQUIRED)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter the email address of this intern!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school did this intern go to? (REQUIRED)",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter the school name for this intern!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
};

const buildTeam = () => {
  console.log(`
  =================
  Finished building MY team!
  =================
    `);
  // output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
};

promptManager();
