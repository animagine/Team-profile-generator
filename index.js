const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

Const render = require("./src/page-template.js")

const wholeTeam =[];

// Prompt for team manager's details

const managerQuestions =[
    {
        type: "input",
        message: "Enter team manager's name"
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
  