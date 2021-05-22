//CBW To-Dos: 1.) Validate Responses (not blank, trim), 2.) Set up Licenses, Badges and Links in an array to avoid redundancy. 3.) Would if/then on generateMarkdown be a good candidate for switch statements?

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const generateMD = require('./scripts/generateMarkdown.js');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'welcome',
            message: 'Welcome to my automated README.md Generator. \n I\'m going to ask you some questions that will help me complete your customized README.md. \n Let\'s get started!',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project, exactly as it appears on GitHub?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Input your project description.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Input your project installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input your project usage information.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Input your project contribution guidelines.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Input your project test instructions.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license applies to your project?',
            choices: ['Apache License 2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'CDDL-1.0', 'EPL-2.0', 'GPL', 'LGPL', 'MIT', 'MPL-2.0', 'N/A'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
    ]);
};

// TODO: Create a function to write README file
// const generateMD = (answers) =>
// `# ${answers.title}

// ## Description
// ${answers.description}

// ## Table of Contents
// - [Installation](#Installation)
// - [Usage](#Usage)
// - [Contributing](#Contributing)
// - [Tests](#Tests)
// - [License](#License)
// - [Questions](#Questions)

// ## Installation
// ${answers.installation}

// ## Usage
// ${answers.usage}

// ## Contributing
// ${answers.contributing}

// ## Tests
// ${answers.tests}

// ## License
// This project is governed by the following license: ${answers.license}.

// ## Questions
// GitHub: [${answers.github}](https://github.com/${answers.github}).
// For inquiries, please contact ${answers.email}.`




// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileAsync('./output/ProjectREADME.md', generateMD(answers)))
        .then(() => console.log('Successfully wrote READMD.md to your output folder'))
        .catch((err) => console.error(err));
};
// Function call to initialize app
init();


