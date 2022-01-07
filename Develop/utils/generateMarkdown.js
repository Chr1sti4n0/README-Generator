// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license ==="MIT")) {
    return `Badge lins`
  } else if ((license === "Mozilla")) {
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
  
  # ${data.title}

  ##Table of Contents
  *<a href="">Title</a>
  *<a href="">Description</a>
  *<a href="">Installation</a>
  *<a href="">Usage</a>
  *<a href="">License</a>
  *<a href="">Contributors</a>
  *<a href="">Tests</a>
  *<a href="">Questions</a>

`;
}

module.exports = generateMarkdown;