// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer= require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];

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
        writeToFile("demo.md", readme_html)
    })
}

// Function call to initialize app
// init();
