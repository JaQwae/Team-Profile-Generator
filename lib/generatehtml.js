const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');




const buildingTeam = (employees) => {

    // All employee profiles are push in here
    const htmlFile = [];

    //Generates manager profile
    const buildingManagerProfile = manager => {
        let managerProfile = `
            <div class="card">
                <img src="./images/managerMale.png" class="card-img-top icon" alt="a cartoon representation icon of a manager ">
                <div class="card-body">
                    <h4 class="card-title">${manager.name}</h4>
                    <h5 class="card-text">Manager</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.id}</li>
                    <li class="list-group-item"><a href = "mailto: ${manager.email}" class ='links'>Email</a></li>
                    <li class="list-group-item">${manager.officeNumber}</li>
                </ul>
            </div>
        `;
        htmlFile.push(managerProfile)
    }
        //Generates engineer profile
        const buildingEngineerProfile = engineer => {
            let engineerProfile = `
                <div class="card">
                    <img src="./images/softwareDeveloperIcon(3).png" class="card-img-top icon" alt="a cartoon picture of a computer depicting gears on the screen">
                    <div class="card-body">
                        <h4 class="card-title">${engineer.name}</h4>
                        <h5 class="card-text">Engineer</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${engineer.id}</li>
                        <li class="list-group-item"><a href = "mailto: ${engineer.email}" class ='links'>Email</a></li>
                        <li class="list-group-item"><a href='https://github.com/${engineer.github}' target='_blank' rel = 'noopener' class = 'links'>GitHub </a></li>
                    </ul>
                </div>
            `;
            htmlFile.push(engineerProfile)
        }
        //Generates intern profile
        const buildingInternProfile = intern => {
            let internProfile = `
                <div class="card">
                    <img src="./images/studentIcon.png" class="card-img-top icon" alt="a cartoon representation of a student using a laptop">
                    <div class="card-body">
                        <h4 class="card-title">${intern.name}</h4>
                        <h5 class="card-text">Intern</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${intern.id}</li>
                        <li class="list-group-item"><a href = "mailto: ${intern.email}" class ='links'>Email</a></li>
                        <li class="list-group-item">${intern.school}</li>
                    </ul>
                </div>
            `;
            htmlFile.push(internProfile)

        }
    // Selects which profile type will be built
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].position() === "Intern") {
            buildingInternProfile(employees[i])
        } else if (employees[i].position() === "Manager") {
            buildingManagerProfile(employees[i])
        } else {
            buildingEngineerProfile(employees[i])
        }
    }

    // Put the different profiles together in one HTML file
    return htmlFile.join()
}




module.exports = employees => {
    return`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assest/style.css">
    <title>Team Members Profile Generator</title>
</head>

<body>
    <h1>My Team</h1>
    <main>
        <div id='card-container'>
            ${buildingTeam(employees)}
        </div>
    </main>
</body>

</html>
`;
}