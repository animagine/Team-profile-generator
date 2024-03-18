const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const render = require("./src/page-template.js")

const wholeTeam =[];

// Prompt for team manager's details

const managerQuestions =[
    {
        type: "input",
        message: "Enter team manager's name",
        name: "Name",
    },
    {
        type: "input",
        message: "Enter manager's mail",
        name: "Email",
      },
    
      {
        type: "input",
        message: "Enter manager's Number:",
        name: "OfficeNumber",
      },
]
// Menu to display after manager's details have been entered,
const menuQuestions = [
    {
      type: "list",
      name: "menu",
      message: "Do you want to add an engineer, intern or finish?",
      choices: ["Engineer", "Intern", "Finish"],
    },
  ];

// Prompts for Engineer's questions

const engineerQuestions = [
    {
      type: "input",
      message: "Enter engineer name:",
      name: "Name",
    },
  
    {
      type: "input",
      message: "Enter engineer ID:",
      name: "EngineerID",
    },
  
    {
      type: "input",
      message: "Enter engineer email:",
      name: "Email",
    },
  
    {
      type: "input",
      message: "Enter Github username:",
      name: "Github",
    },
  ];

  //Prompt for Intern's questions
  const internQuestions = [
    {
      type: "input",
      message: "Enter intern name:",
      name: "Name",
    },
  
    {
      type: "input",
      message: "Enter intern ID:",
      name: "InternID",
    },
  
    {
      type: "input",
      message: "Enter intern email:",
      name: "Email",
    },
  
    {
      type: "input",
      message: "Enter name of school intern attended:",
      name: "School",
    },
  ];
  
// write HTML with file name and data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  }

// initialise program
function generateTeam() {
    // Inquirer.prompt to ask the Manager Questions when the application starts
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
      console.log(managerAnswers);
  
      const manager = new Manager(
        managerAnswers.Name,
        managerAnswers.ManagerID,
        managerAnswers.Email,
        managerAnswers.OfficeNumber,
      );
      wholeTeam.push(manager);
      displayMenu();
    });
}

// function to display menu

function displayMenu() {
    // Another inquirer. prompt to display the menu options after the user has answered the engineer questions
    inquirer.prompt(menuQuestions).then((menuAnswers) => {
      console.log(menuAnswers.menu);
  
      if (menuAnswers.menu === "Engineer") {
        displayEngineer();
      } else if (menuAnswers.menu === "Intern") {
        displayIntern();
      } else {
        writeToFile("team.html", render(wholeTeam));
      }
    });
  }

  // function to display engineer's details
  function displayEngineer() {
      inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
      console.log(engineerAnswers);
      const engineer = new Engineer(
        engineerAnswers.Name,
        engineerAnswers.EngineerID,
        engineerAnswers.Email,
        engineerAnswers.Github,
      );
      wholeTeam.push(engineer);
  
      displayMenu();
    });
  }  

  // function to display intern's details
  function displayIntern() {
    //Inquirer.prompt to ask the Intern Questions after user has selected Intern from the menu options
    inquirer.prompt(internQuestions).then((internAnswers) => {
      console.log(internAnswers);
      const intern = new Intern(
        internAnswers.Name,
        internAnswers.InternID,
        internAnswers.Email,
        internAnswers.School,
      );
      wholeTeam.push(intern);
  
      displayMenu();
    });
  }
  
  generateTeam();  