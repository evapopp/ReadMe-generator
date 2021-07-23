// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'installation',
        type: 'input',
        message: 'Please indicate how to install application',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please indicate how this application will be used',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please choose a license from the list',
        choices: [
            'Apache 2.0',
            'Boost Software License 1.0',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Database License',
        ],
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Please identify the contributers of the application',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Please indicate how to test that the application is working',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? econsole.error(err) : console.log('README file generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then((response => {
     console.log('answer logged!')   
     writeToFile( 'readme.md', response)
    })
    )

}
// ask questions
// assemble answers
// write readme

// Function call to initialize app
init();
