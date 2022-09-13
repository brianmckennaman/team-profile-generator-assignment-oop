// required packages/files
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const responseArray = []

// prompt to input team manager data
inquirer
    .prompt([
            {
            type: 'input',
            message: 'Enter the name of the team manager',
            name: 'manager',
        },
        {
            type: 'input',
            message: 'Enter the employee number of the team manager',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter the email address of the team manager',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter the office number of the team manager',
            name: 'office'
        },
    ])
    .then((response) => {
        const obj = new Manager (response.manager, response.id, response.email, response.office);
        console.table(obj);
        responseArray.push(obj);
        console.log(responseArray);
        restart();
    })
    // prompt to add more team members
    function restart() {
        inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add more team members?',
                choices: ['Engineer', 'Intern', 'Finish'],
                name: 'add'
            }
        ])
        .then((restartResponse) => {
            console.log(restartResponse)

            if (restartResponse.add === 'Engineer') {
                engineerPrompt()
            }
            else if(restartResponse.add === 'Intern') {
                internPrompt()
            }
            else {
                finishPrompt()
            }
        })

    }
    // prompt to enter engineer data
    function engineerPrompt() {
        inquirer
        .prompt([
            
                {
                    type: 'input',
                    message: 'Enter the name of the engineer',
                    name: 'engineer',
                },
                {
                    type: 'input',
                    message: 'Enter the employee number of the engineer',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'Enter the email address of the engineer',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'Enter the github of the engineer',
                    name: 'github'
                },
            
        ])
        .then((response) => {
            const obj = new Engineer(response.engineer, response.id, response.email, response.github)
            responseArray.push(obj)
            console.log(responseArray)
            restart();
        })

    }
    // prompt to enter intern data
    function internPrompt() {
        inquirer
        .prompt([
            
                {
                    type: 'input',
                    message: 'Enter the name of the intern',
                    name: 'intern',
                },
                {
                    type: 'input',
                    message: 'Enter the employee number of the intern',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'Enter the email address of the intern',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'Enter the school of the intern',
                    name: 'school'
                },
            
        ])
        .then((response) => {
            const obj = new Intern(response.intern, response.id, response.email, response.school)
            responseArray.push(obj)
            console.log(responseArray)
            restart();
        })
    }
    // after selecting finish, dynamically create employee cards and write the file
    function finishPrompt(){
        const finalArray = []
        for (let i = 0; i < responseArray.length; i++) {
            const card = `<div class="w3-card-2 w3-center" style="width: 50%; height: 20%;">
            <header class="w3-container w3-teal" style="height: 20px">${responseArray[i].name}</header>
            <p class="w3-container w3-center">
                <ul>${responseArray[i].id}</ul>
                <ul>${responseArray[i].email}</ul>
                <ul>${responseArray[i].office||responseArray[i].github||responseArray[i].school}</ul>
            </p>
        </div>`
            
            finalArray.push(card)
        }
        fs.writeFile('./dist/index.html', 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            <title>Document</title>
        </head>
        <body>
            <header class="w3-container w3-blue w3-margin-bottom" style="height: 100px;" >
                <h1 class="w3-center">Team Members</h1>
            </header>
            <div class="w3-container" style="justify-content: center">
                ${finalArray}
            </div>
        </body>
        </html>`,
        (err) => err ? console.error(err) : console.log('Success!'))
    }