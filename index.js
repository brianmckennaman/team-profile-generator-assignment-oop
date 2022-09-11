const inquirer = require('inquirer')
const jest = require ('jest')

inquirer
    .prompt([
        {
            type: 'choice',
            message: 'Choose the role to enter data for',
            name: 'role',
            choices: ['Team manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            message: 'Enter the name of the team manager',
            name: 'manager',
        },
        {
            type: 'input',
            message: 'Enter the employee number of the team manager',
            name: 'team manager number',
        },
        {
            type: 'input',
            message: 'Enter the email address of the team manager',
            name: 'team manager email'
        },
        {
            type: 'input',
            message: 'Enter the office number of the team manager',
            name: 'team manager office'
        },
        {
            type: 'choice',
            message: 'Would you like to add more team members?',
            choices: ['Engineer', 'Intern', 'Finish'],
            name: 'add team members'
        }
    ])

    function engineerPrompt() {

    }

    function internPrompt() {

    }

    function finishPrompt(){

    }