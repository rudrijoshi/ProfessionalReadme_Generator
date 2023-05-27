// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of the project',
    },
    {
        type: 'input',
        name: 'tableofcontents',
        message: 'Please enter the table of contents of the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation of the project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage of the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please enter the license of the project?',
        choices: ['none', 'apache', 'GNU', 'MIT', 'Eclipse'],
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Please enter the credit in the project',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution in the project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the tests of the project?',
    },
    {
        type: 'input',
        name: 'Githubusername',
        message: 'Please enter the github username in the project?',
    },
    {
        type: 'input',
        name: 'emailaddress',
        message: 'Please enter the email address in the project?',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Created README.md file')
    );
}

// TODO: Create a function for initializing app
function init() {
    inquirer.prompt(questions).then((answer) => {
        const readMePage = generateMarkdown(answer);
        writeToFile("README.md",readMePage);
    });
}

// Function call to initialize app
init();


