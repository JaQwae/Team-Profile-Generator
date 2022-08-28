const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// const fs = require('fs');
// const generatehtml = require('./scripts/generatehtml');

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'managerName',
            validate: (managerName) =>{
                if(managerName){
                    return true
                } else{
                    return 'Required, Please enter your name.'
                }
            }
        },
        {
            type: 'input',
            message: "What is your ID",
            name: 'managerId',
            validate: (managerId) =>{
                if(managerId){
                    return true
                } else{
                    return 'Required, Please enter your ID number.'
                }
            }
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'managerEmail',
            validate: (managerEmail) =>{
                if(managerEmail){
                    return true
                } else{
                    return 'Required, Please enter your email address.'
                }
            }
        },
        {
            type: 'input',
            message: "What the office phone number?",
            name: 'officeNumber',
            validate: (officeNumber) =>{
                if(officeNumber){
                    return true
                } else{
                    return 'Required, Please the office phone number.'
                }
            }
        }
    ]).then((answers) => {
        console.log(answers.managerName);
        console.log(answers.managerId);
        console.log(answers.managerEmail);
        console.log(answers.officeNumber);
        selectionMenu();
    })
};

managerPrompt()

const selectionMenu = () => {
    return inquirer.prompt([
        {
        type: 'list',
        message: "What would you like to do next?",
        name: 'jobType',
        choices: ['Add an engineer', 'Add an intern', 'There are no more employees to add, select to continue'],
        }
    ]).then((answers) => {
        // console.log(answers.jobType) (delete when section is finished)
        switch(answers.jobType) {
            case 'Add an engineer':
                engineerPrompt();
                break;
            case 'Add an intern':
                internPrompt();
                break;
            // think of some functionality to start generating the html ***********
            default:
                defaultAction();
                break;
        }
    })
};

const engineerPrompt = () => {
    console.log('AAE')
}

const internPrompt = () => {
    console.log('AAI')
}

// delete once functionality for this part is figured out **********
const defaultAction = () => {
    console.log('Default action')
}


























// Writes HTML file
// const writeToFile = answersInputs => {
//     return new Promise ((resolve, reject) => {
//         fs.writeFile('./index.html', answersInputs, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve({
//                 ok: true
//             });
//         });
//     });
// };

// Create a function to initialize app
// function init() {
//     inquirer.prompt(managerPrompt)
//     .then((answers) => {
//         console.log(answers);
    // let answersInputs = generatehtml(answers);
    // writeToFile(answersInputs)
    //});
// }

// Function call to initialize app
// init();

//exports
module.exports = managerPrompt;