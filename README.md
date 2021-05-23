# 09 Node.js Homework: Professional README Generator
[![License: MIT](https://img.shields.io/github/license/CailinBellWold/README-Generator?style=plastic)](https://opensource.org/licenses/MIT)

## Description 
Create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

### Motivation
Streamlining each step of the programming process enables the developer to spend more time problem-solving and less time duplicating efforts. Automating the process of creating README.md files is one step in streamlining project development.

### Learning Targets
This exercise provided my first experience with Node.js, NPM packages, and generating a new file as ouput.

## Table of Contents
- [Core Objectives Met](#Core)
- [Technologies Used](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#MIT)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Core Objectives Met
1. Following the completion of prompts about an application's repository, the user is presented with a high-quality, professional README.md, generated with the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
2. When a user enters the project title, it is displayed as the title of the README.
3. When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
4. When a user chooses a license for the application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
5. When a user enters their GitHub username, it is added to the section of the README entitled Questions, with a link to the GitHub profile.
6. When a user enters their email address, it is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions. 
7. When a user clicks on the links in the Table of Contents,  then they are taken to the corresponding section of the README.

## Technologies Used
- JavaScript
- Node.js
- [NPM Inquirer Package](https://www.npmjs.com/package/inquirer)
- [NPM FS Package](https://www.npmjs.com/package/fs)
- [NPM Util Package](https://www.npmjs.com/package/util)
- Shields.io

## Installation

1. Clone this README-Generator repo to your machine.
2. Open the repo in your terminal.
3. Run ```npm init```
4. Run ```npm install```

## Usage

1. Open README-Generator (now stored on your machine) in your terminal.
2. Run ``` node index.js ```
2. You will be prompted to answer questions about your project. Answer each question. Markdown is supported.
3. Your README.md file will write to the output folder. 
4. Copy or cut/paste newly generated README.md file to your project's repo. Any edits that you may have (for additional sections, or to remove sections), may be made to this file before uploading it as part of your project's repo.

DEMO 
*Creating a README, following the in-terminal prompts. Verifying that the README file is created and meets project requirements.*

![Demo README.md creation.](./images/README-Generator.gif)

SCREENSHOT *Screenshot of demo README.*

![README.md output screenshot.](./images/README-Generator-Screenshot01.png)

## MIT License
&copy;2021 Cailin Bell Wold

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

## Tests

## Questions
For inquiries, please contact [Cailin Bell Wold](https://github.com/CailinBellWold).
