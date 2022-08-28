const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// const fs = require('fs');
// const generatehtml = require('./scripts/generatehtml');

const managerPrompt = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'managerName',
        validate: (managerName) =>{
            if(managerName){
                return true
            } else{
                return 'Nothing inputted, please enter your name.'
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
    inquirer.prompt(managerPrompt)
    .then((answers) => {
        console.log(answers);
    // let answersInputs = generatehtml(answers);
    // writeToFile(answersInputs)
    });
}

// Function call to initialize app
init();

//exports
module.exports = managerPrompt;