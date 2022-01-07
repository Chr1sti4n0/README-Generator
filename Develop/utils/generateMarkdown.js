// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license ==="")) {
    return `Badge lins`
  } else if ((license === "")) {
    return `badge link`
  } else {
    return
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  
  #Title ${data.title}

  ##Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributors](#contributors)
  *[Tests](#tests)
  *[Questions](#questions)

  <a name='description'></a>
  ##Description 
  ${data.description}

  <a name='installation'></a>
  ##Installation
  ${data.installation}

  <a name='usage'></a>
  ##Usage
  ${data.usage}

  <a name='license'></a>
  ##License
  ${data.license}

  <a name='contributors'></a>
  ##Contributors
  ${data.contributors}

  <a name='tests'></a>
  ##Tests
  ${data.tests}

  <a name='questions'></a>
  ##Questions
  ${data.questions}
  

`;
}

module.exports = generateMarkdown;
