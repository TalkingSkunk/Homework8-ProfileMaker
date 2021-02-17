// STEPS
// 1. CREATE CLASSES FOR EACH ROLE.
// 2. RUN JEST TESTS FOR THEIR FUNCTIONALITY.
// 3. CREATE HTML TEMPLATES FOR EACH ROLE, AND FINAL HTML TEMPLATE.
// 4. CREATE 

const Manager = require("./Classes/manager.js");
const Engineer = require("./Classes/engineer.js");
const Intern = require("./Classes/intern.js");
const render = require("./Classes/toFinalHTML.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// FIND THE DIRECTORY NAMED "OUTPUT" FOR FINAL PRODUCT
const OUTPUT_DIR = path.resolve(__dirname, "./output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


// 1. ASK FOR USER INPUT AND PUT THEM INTO ARRAYS AS OBJECTS; SYNC METHOD
const array = [];

// USE INPUT AND MAKE MANAGER CLASS OBJECT(S) AND PUSH INTO ARRAY
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
    array.push(new Manager(input.name, input.id, input.email, input.officeNumber));
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
            console.log(array, '[You are done! You have created a team profile. Please check out the output folder.]');
            const finishedHTML = render(array); // 2. CONVERT THE COLLECTED OBJECTS IN ARRAY INTO HTML TEMPLATE BLOCKS
            fs.writeFileSync(outputPath, finishedHTML); // 3. CREATE FINAL PRODUCT IN OUTPUT
            break;
    }
}

// USE INPUT AND MAKE ENGINEER CLASS OBJECT(S) AND PUSH INTO ARRAY
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
    array.push(new Engineer(input.name, input.id, input.email, input.github));
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
            console.log(array, '[You are done! You have created a team profile. Please check out the output folder.]');
            const finishedHTML = render(array); // 2. CONVERT THE COLLECTED OBJECTS IN ARRAY INTO HTML TEMPLATE BLOCKS
            fs.writeFileSync(outputPath, finishedHTML); // 3. CREATE FINAL PRODUCT IN OUTPUT
            break;
    }
}

// USE INPUT AND MAKE INTERN CLASS OBJECT(S) AND PUSH INTO ARRAY
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
    array.push(new Intern(input.name, input.id, input.email, input.school));
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
            console.log(array, '[You are done! You have created a team profile. Please check out the output folder.]');
            const finishedHTML = render(array); // 2. CONVERT THE COLLECTED OBJECTS IN ARRAY INTO HTML TEMPLATE BLOCKS
            fs.writeFileSync(outputPath, finishedHTML); // 3. CREATE FINAL PRODUCT IN OUTPUT
            break;
    }
}

step1();
