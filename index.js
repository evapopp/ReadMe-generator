// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Please enter the title of your project',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please enter a project description',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter your email',
    },
    {
        name: 'github',
        type: 'input',
        message: 'Please enter your github username',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please choose a licesnse from the list',
        choices: '',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}
// ask questions
// assemble answers
// write readme

// Function call to initialize app
init();
