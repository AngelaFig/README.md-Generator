// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer= require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? ',

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a detailed description explaining the what, how, and why of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step by step description of the steps required to install your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
    
        type: 'list',
        name: 'license',
        message: 'Select a License',
        choices:['MIT','Apache','Boost','None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you would like other developers to contribute to your project, please provide guidelines for them to do so.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application and provide examples on how to run them.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Add your GitHub username and email address so other developers can reach out to you with any questions.',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data).then((err,data)=>{
        if(err) console.log(err)
        console.log("README Generated Successfully")
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log("Init Function Executed")
    inquirer.prompt(questions).then(data=> {
        let readme_html =generateMarkdown(data)
        writeToFile("README.md", readme_html)
    })
}

// Function call to initialize app
init();
