// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choice = require('inquirer/lib/objects/choice');

// Questions for user input
const questions = [];
const promptQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('your README must have a title. Please enter a title!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a Description of your project',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('your README must have a Description. Please enter a Description!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'install',
            message: 'How can one install your project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter install details!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter instructions on how to use your Project!');
                  return false;
                }
              }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Are there any licenses you need to include?',
            choices: ['MIT', 'Apache', 'GPL'],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please choose a license!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who were the contributers to the project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your github username for any questions people may have?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email for any questions people may have.'
        }
  
       
    ])
}

// function to write README file
promptQuestions()
.then(data => {
    const pageReadMe = generateMarkdown(data);

    fs.writeFile('README.md', pageReadMe, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Page created! Check out README.md in this directory to see it!');
      });
  })




