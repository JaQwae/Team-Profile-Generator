const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// const fs = require('fs');
// const generatehtml = require('./scripts/generatehtml');

const managerprompt = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'managerName',
        validate: (managerName) =>{
            if(managerName){
                return true
            } else{
                return 'Required field left blank, please enter a title.'
            }
        }
    },
]



























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
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
    // let answersInputs = generatehtml(answers);
    // writeToFile(answersInputs)
    });
}

// Function call to initialize app
init();

//exports
module.exports = questions;