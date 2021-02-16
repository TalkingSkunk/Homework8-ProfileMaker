const manager = require("./Classes/manager.js");
const engineer = require("./Classes/engineer.js");
const intern = require("./Classes/intern.js");
const render = require("./Classes/toFinalHTML.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "./output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// 1. ASK FOR USER INPUT; SYNC METHOD

const array = [];

async function step1() {
    const input = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Manager\'s name?',
            name: 'name',
            validate: (value) => { if (value) { return true } else { return 'You need to give the name to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the Manager\'s ID number?',
            name: 'id',
            validate: (value) => { if (value) { return true } else { return 'You need to give an ID number to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the Manager\'s email address?',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'You need to give an email address to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the Manager\'s office number?',
            name: 'officeNumber',
            validate: (value) => { if (value) { return true } else { return 'You need to give the office number to continue.' } },
        },
        {
            type: 'list',
            message: 'Done. Now, please choose your options.',
            name: 'options',
            choices: ['Add a Manager.', 'Add an Engineer.', 'Add an Intern.', 'Finish.'],
        },
    ]);
    array.push(new manager.Manager(input.name, input.id, input.email, input.officeNumber));
    switch (input.options) {
        case 'Add a Manager.':
            console.log('[Adding a Manager...]');
            step1();
            break;
        case 'Add an Engineer.':
            console.log('[Adding an Engineer...]');
            step2();
            break;
        case 'Add an Intern.':
            console.log('[Adding an Intern...]');
            step3();
            break;
        default:
            console.log('[You are done! You have created a team profile.]', array);
            const finishedHTML = render(array);
            fs.writeFileSync(outputPath, finishedHTML);
            break;
    }
}

async function step2() {
    const input = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineer\'s name?',
            name: 'name',
            validate: (value) => { if (value) { return true } else { return 'You need to give the name to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the Engineer\'s ID number?',
            name: 'id',
            validate: (value) => { if (value) { return true } else { return 'You need to give an ID number to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the Engineer\'s email address?',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'You need to give an email address to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the Engineer\'s GitHub URL? Please include the Protocol.',
            name: 'github',
            validate: (value) => { if (value) { return true } else { return 'You need to give a URL to continue.' } },
        },
        {
            type: 'list',
            message: 'Done. Now, please choose your options.',
            name: 'options',
            choices: ['Add a Manager.', 'Add an Engineer.', 'Add an Intern.', 'Finish.'],
        },
    ]);
    array.push(new engineer.Engineer(input.name, input.id, input.email, input.github));
    switch (input.options) {
        case 'Add a Manager.':
            console.log('[Adding a Manager...]');
            step1();
            break;
        case 'Add an Engineer.':
            console.log('[Adding an Engineer...]');
            step2();
            break;
        case 'Add an Intern.':
            console.log('[Adding an Intern...]');
            step3();
            break;
        default:
            console.log('[Finished! You have created a team profile.]', array);
            const finishedHTML = render(array);
            fs.writeFileSync(outputPath, finishedHTML);
            break;
    }
}

async function step3() {
    const input = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Intern\'s name?',
            name: 'name',
            validate: (value) => { if (value) { return true } else { return 'You need to give the name to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the Intern\'s ID number?',
            name: 'id',
            validate: (value) => { if (value) { return true } else { return 'You need to give an ID number to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the Intern\'s email address?',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'You need to give an email address to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the name of Intern\'s school?',
            name: 'school',
            validate: (value) => { if (value) { return true } else { return 'You need to give a name to continue.' } },
        },
        {
            type: 'list',
            message: 'Done. Now, please choose your options.',
            name: 'options',
            choices: ['Add a Manager.', 'Add an Engineer.', 'Add an Intern.', 'Finish.'],
        },
    ]);
    array.push(new intern.Intern(input.name, input.id, input.email, input.school));
    switch (input.options) {
        case 'Add a Manager.':
            console.log('[Adding a Manager...]');
            step1();
            break;
        case 'Add an Engineer.':
            console.log('[Adding an Engineer...]');
            step2();
            break;
        case 'Add an Intern.':
            console.log('[Adding an Intern...]');
            step3();
            break;
        default:
            console.log('[You are done! You have created a team profile.]', array);
            const finishedHTML = render(array);
            fs.writeFileSync(outputPath, finishedHTML);
            break;
    }
}

step1();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// const finishedHTML = render.render( array );
// fs.writeFileSync(outputPath, finishedHTML);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
