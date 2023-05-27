// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const Axios = require('axios');

function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  }
  else {
    return Axios.get(`https://img.shields.io/badge/license-${license}-yellow.svg`);
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  }
  else {
    return "Here is your a license link"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  }
  else {
    return "Here is your a license section of README"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Auto badge](${`Axios.get(https://img.shields.io/badge/license-${data.license}-yellow.svg)`})



 ## Description 
  ${data.description}

## Table of Contents (Optional)
${data.tableofcontents}

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}
    
## Questions

If you have any questions please feel free to contact me on my email address which is ${data.emailaddress}
and my Github profile is https://github.com/${data.Githubusername}/

## Credits

${data.credit}

## License

The application is covered under the following license:
${data.license}

## How to Contribute

${data.contribution}

## Tests

${data.tests}

`;
}

module.exports = generateMarkdown;

