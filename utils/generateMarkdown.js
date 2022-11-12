// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
function renderLicenseBadge(license) {
return `![License](https://img.shields.io/badge/license-${license}-green.svg)`
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  # Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  this project is licensed under the ${data.license} license
  ## Contributing
  ${data.contributing}
  ## Questions
  if you have any additional questions, you can reach me at ${data.email}
  [github](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;