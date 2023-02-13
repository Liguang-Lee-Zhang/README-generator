const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your project's title?",
            name: 'title',
        },
        {
            type: 'input',
            message: "What is the project's description ",
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Are there any credits you would like to add?',
            name: 'credits',
        },
        {
            type: 'input',
            message: "What are the contribution guidelines",
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What are the test instructions? ',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'What license do you want? ',
            choices: ['Apache','GNU','MIT','BSD"'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your GitHub username? ',
            name: 'userName',
        },
        {
            type: 'input',
            message: 'What is your email? ',
            name: 'email',
        },

    ])
    .then((response) => {
        fs.writeFile('README.md',`

# ${response.title}

![License badge](https://img.shields.io/badge/license-${response.license}-green)

## Description

${response.description}

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

${response.installation}

## Usage

${response.usage}

## Credits

${response.credits}

## License

Licensed under the ${response.license}.

## How to Contribute

${response.contribution}

## Tests

${response.tests}

## Questions

If you have any questions or have great ideas you would like to share with me, my github is [${response.userName}](https://github.com/${response.userName}).

You may also get in touch using my email: ${response.email}


`,
            err => err ? console.error(err) : console.log("docmuent created!"))

    });
