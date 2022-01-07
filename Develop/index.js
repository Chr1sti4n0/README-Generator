// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What did you install?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is this used for?',
        name: 'usage',
    }, 
    {
        type: 'list',
        message: 'Select a License',
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD'],
    }, 
    {
        type: 'input',
        message: 'Who is contributing?',
        name: 'contributors',
    }, 
    {
        type: 'input',
        message: 'What tests did you run?',
        name: 'tests',
    }, 
    {
        type: 'input',
        message: 'Questions?',
        name: 'questions',
    },
   ])
   .then((data) => {
     const myReadMe = generateMarkdown(data);

     fs.writeFile('README.md', myReadMe, (err) =>
        err ? console.log(err) : console.log('You have successfully created a README file!')
     );
    });



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {


// Function call to initialize app
// init();
