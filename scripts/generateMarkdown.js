// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
// ![GitHub](https://img.shields.io/github/license/CailinBellWold/README-Generator)

function renderLicenseBadge(license, answers) {
  const licenses = [
    {
      license: 'Apache License 2.0',
      badge: `(https://img.shields.io/badge/license-${answers.license}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/Apache-2.0)`
    },
    {
      license: 'BSD-2-Clause',
      badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/BSD-2-Clause)`
    },
    {
      license: 'BSD-3-Clause',
      badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/BSD-3-Clause)`
    },
    {
      license: 'CDDL-1.0',
      badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/CDDL-1.0)`
    },
    {
      license: 'EPL-2.0',
      badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/EPL-2.0)`
    },
    {
      license: 'GPL',
      badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/gpl-license)`
    },
    {
      license: 'LGPL',
      badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/lgpl-license)`
    },
    {
      license: 'MIT',
      badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/MIT)`
    },
    {
      license: 'MPL-2.0',
      badge: `(https://img.shields.io/github/license/${answers.github}/${answers.title}?style=plastic)`,
      link: `(https://opensource.org/licenses/MPL-2.0)`
    },
  ]
  switch (license) {
    case 'Apache License 2.0':
      response = `[![${licenses[0].license}]${licenses[0].badge}]${licenses[0].link}`;
      break;
    case 'BSD-2-Clause':
      response = `[![${licenses[1].license}]${licenses[1].badge}]${licenses[1].link}`;
      break;
    case 'BSD-3-Clause':
      response = `[![${licenses[2].license}]${licenses[2].badge}]${licenses[2].link}`;
      break;
    case 'CDDL-1.0':
      response = `[![${licenses[3].license}]${licenses[3].badge}]${licenses[3].link}`;
      break;
    case 'EPL-2.0':
      response = `[![${licenses[4].license}]${licenses[4].badge}]${licenses[4].link}`;
      break;
    case 'GPL':
      response = `[![${licenses[5].license}]${licenses[5].badge}]${licenses[5].link}`;
      break;
    case 'LGPL':
      response = `[![${licenses[6].license}]${licenses[6].badge}]${licenses[6].link}`;
      break;
    case 'MIT':
      response = `[![${licenses[7].license}]${licenses[7].badge}]${licenses[7].link}`;
      break;
    case 'MPL-2.0':
      response = `[![${licenses[8].license}]${licenses[8].badge}]${licenses[8].link}`;
      break;
    case 'N/A':
      response = "";
      break;
  }
  return response;
};

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