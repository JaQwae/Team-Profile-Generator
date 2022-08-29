const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const generateHtml = require('./lib/generatehtml');


// Information enter form prompt gets push in here 
const employees = [];


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
            message: "What is your ID number",
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
    // creates a new object for the manager class and pushes it to employees array
    ]).then((answers) => {
        const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        employees.push(manager);
        selectionMenu();
    })
};


// Allows you to select an employee type or generate HTML
const selectionMenu = () => {
    return inquirer.prompt([
        {
        type: 'list',
        message: "What would you like to do next?",
        name: 'jobType',
        choices: ['Add an engineer', 'Add an intern', 'Finished building my team'],
        }
    ]).then((answers) => {
        switch(answers.jobType) {
            // init engineer prompt
            case 'Add an engineer':
                engineerPrompt();
                break;
            // init intern prompt
            case 'Add an intern':
                internPrompt();
                break;
            // think of some functionality to start generating the html ***********
            default:
                creatingHtmlFile();
                break;
        }
    })
};


const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'engineerName',
            validate: (engineerName) =>{
                if(engineerName){
                    return true
                } else{
                    return "Required, Please enter an engineer's name."
                }
            }
        },
        {
            type: 'input',
            message: "What is their ID number",
            name: 'engineerId',
            validate: (engineerId) =>{
                if(engineerId){
                    return true
                } else{
                    return 'Required, Please enter their ID number.'
                }
            }
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'engineerEmail',
            validate: (engineerEmail) =>{
                if(engineerEmail){
                    return true
                } else{
                    return 'Required, Please enter their email address.'
                }
            }
        },
        {
            type: 'input',
            message: "What is their GitHub username?",
            name: 'engineerGitHub',
            validate: (engineerGitHub) =>{
                if(engineerGitHub){
                    return true
                } else{
                    return 'Required, Please their GitHub username.'
                }
            }
        }
    // creates a new object for the engineer class and pushes it to employees array
    ]).then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        employees.push(engineer);
        selectionMenu();
    })
};


const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'internName',
            validate: (internName) =>{
                if(internName){
                    return true
                } else{
                    return "Required, Please enter an intern's name."
                }
            }
        },
        {
            type: 'input',
            message: "What is their ID number",
            name: 'internId',
            validate: (internId) =>{
                if(internId){
                    return true
                } else{
                    return 'Required, Please enter their ID number.'
                }
            }
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'internEmail',
            validate: (internEmail) =>{
                if(internEmail){
                    return true
                } else{
                    return 'Required, Please enter their email address.'
                }
            }
        },
        {
            type: 'input',
            message: "What school do they attend?",
            name: 'internSchool',
            validate: (internSchool) =>{
                if(internSchool){
                    return true
                } else{
                    return 'Required, Please enter the school that they attend.'
                }
            }
        }
    // creates a new object for the intern class and pushes it to employees array
    ]).then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employees.push(intern);
        selectionMenu();
    })
};

// delete once functionality for this part is figured out **********
const creatingHtmlFile = () => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./index.HTML', generateHtml(employees), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

//starts the program
managerPrompt();

// use as testing to see answers in console
// function testCallBack(){
//     managerPrompt();
//     setTimeout(()=>{
//         console.log(employees);
//     },5000);
// }
// testCallBack();

module.exports = employees;






















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