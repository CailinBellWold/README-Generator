// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const licenses = [
//   {
//     license: 'Apache License 2.0',
//     badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
//     link: `(https://opensource.org/licenses/Apache-2.0)`
//   },
//   {
//   license: 'BSD-3-Clause',
//   badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
//   link: `(https://opensource.org/licenses/BSD-3-Clause)`
//   },
//   {
//   license: 'BSD-2-Clause',
//   badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
//   link: `(https://opensource.org/licenses/BSD-2-Clause)`
//   }
// ]

function renderLicenseBadge(license, answers) {
  const licenses = [
    {
      license: 'Apache License 2.0',
      badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/Apache-2.0)`
    },
    {
    license: 'BSD-3-Clause',
    badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
    link: `(https://opensource.org/licenses/BSD-3-Clause)`
    },
    {
    license: 'BSD-2-Clause',
    badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
    link: `(https://opensource.org/licenses/BSD-2-Clause)`
    }
  ]
  switch (license) {
    case 'Apache License 2.0':
      response = `[![${licenses[0].license}]${licenses[0].badge}]${licenses[0].link}`;
      break;
    // case 'B':
    //   response = '80 - 89';
    //   break;
    // case 'C':
    //   response = '70 - 79';
    //   break;
    // case 'D':
    //   response = '60 - 69';
    //   break;
    // case 'F':
    //   response = '0 - 59';
    //   break;
    // default:
    //   response = '0';
    //   break;
  }
  return response;
};

// function renderLicenseBadge(license) {
//   let badge;
// if (answers.license === 'Apache License 2.0') {
//   badge = `[![License: Apache-2.0](https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)](https://opensource.org/licenses/Apache-2.0)`
//   return badge;
//   } else if (answers.license === 'BSD-3-Clause') {
//     badge = `[![License: BSD-3-Clause](https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)](https://opensource.org/licenses/BSD-3-Clause)`
//     return badge;
//   } else if (answers.license === 'BSD-2-Clause') {
//     badge = `[![License: BSD-2-Clause](https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)](https://opensource.org/licenses/BSD-2-Clause)`
//     return badge;
//   } else if (answers.license === 'CDDL-1.0') {
//     badge = `[![License: CDDL-1.0](https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)](https://opensource.org/licenses/CDDL-1.0)`
//     return badge;
//   } else if  (answers.license === 'EPL-2.0') {
//     badge = `[![License: EPL-2.0](https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)](https://opensource.org/licenses/EPL-2.0)`
//     return badge;
//   } else if  (answers.license === 'GPL') {
//     badge = `[![License: GPL](https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)](https://opensource.org/licenses/gpl-license)`
//     return badge;
//   } else if (answers.license === 'LGPL') {
//     badge = `[![License: LGPL](https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)](https://opensource.org/licenses/lgpl-license)`
//     return badge;
//     } else if (answers.license === 'MIT') {
//     badge = `[![License: MIT](https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)](https://opensource.org/licenses/MIT)`
//     return badge;
//   } else if (answers.license === 'MPL-2.0') {
//     badge = `[![License: MPL-2.0](https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)](https://opensource.org/licenses/MPL-2.0)`
//     return badge;
//   } else if (answers.license === 'N/A') {
//     badge = "";
//     return badge;
//   }
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
if (answers.license === 'Apache License 2.0') {
  licenseLink = `[License: Apache-2.0](https://opensource.org/licenses/Apache-2.0)`
  return licenseLink; 
  } else if (answers.license === 'BSD-3-Clause') {
    licenseLink = `[License: BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)`
    return licenseLink;;
  } else if (answers.license === 'BSD-2-Clause') {
    licenseLink = `[License: BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)`
    return licenseLink;;
  } else if (answers.license === 'CDDL-1.0') {
    licenseLink = `[License: CDDL-1.0](https://opensource.org/licenses/CDDL-1.0)`
    return licenseLink;;
  } else if  (answers.license === 'EPL-2.0') {
    licenseLink = `[License: EPL-2.0](https://opensource.org/licenses/EPL-2.0)`
    return licenseLink;;
  } else if  (answers.license === 'GPL') {
    licenseLink = `[License: GPL](https://opensource.org/licenses/gpl-license)`
    return licenseLink;;
  } else if (answers.license === 'LGPL') {
    licenseLink = `[License: LGPL](https://opensource.org/licenses/lgpl-license)`
    return licenseLink;;
    } else if (answers.license === 'MIT') {
      licenseLink = `[License: MIT](https://opensource.org/licenses/MIT)`
    return licenseLink;;
  } else if (answers.license === 'MPL-2.0') {
    licenseLink = `[License: MPL-2.0](https://opensource.org/licenses/MPL-2.0)`
    return licenseLink;;
  } else if (answers.license === 'N/A') {
    licenseLink = "";
    return licenseLink;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license,answers)};

  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## License
  This project is governed by the following license: ${answers.license}.
  
  ## Questions
  GitHub: [${answers.github}](https://github.com/${answers.github}).
  For inquiries, please contact ${answers.email}.`;
}

module.exports = generateMarkdown;

//When a user chooses a license for the application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.