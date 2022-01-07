// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license === "Apache")) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if ((license === "Boost")) {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  } else if ((license === "BSD")) {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ((license === "Apache")) {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if ((license === "Boost")) {
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  } else if ((license === "BSD")) {
    return `(https://opensource.org/licenses/BSD-3-Clause)`  
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  
  #Title ${data.title}

  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributors](#contributors)
  *[Tests](#tests)
  *[Questions](#questions)

  <a name='description'></a>

  ## Description 
  ${data.description}

  <a name='installation'></a>

  ## Installation
  ${data.installation}

  <a name='usage'></a>

  ## Usage
  ${data.usage}

  <a name='license'></a>

  ## License
  ${data.license}

  <a name='contributors'></a>

  ## Contributors
  ${data.contributors}

  <a name='tests'></a>

  ## Tests
  ${data.tests}

  <a name='questions'></a>

  ## Questions
  
  Email: Chr1sti4n0@github.com
  GitHub: Chr1sti4n0

`;
}

module.exports = generateMarkdown;
