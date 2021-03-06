// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'Open Database License': '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
  };
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'Apache 2.0': '(https://opensource.org/licenses/Apache-2.0)',
    'Boost Software License 1.0': '(https://www.boost.org/LICENSE_1_0.txt)',
    'MIT': '(https://opensource.org/licenses/MIT)',
    'Mozilla Public License 2.0': '(https://opensource.org/licenses/MPL-2.0)',
    'Open Database License': '(https://opendatacommons.org/licenses/odbl/)'
  }
  return licenseLink[license]
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents:
  1. [Description](#description)
  2. [Questions](#questions)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Tests](#tests)


  ## Description
  ${data.description}

  ## Questions
  If you need to reach me with additional questions, contact me via: 
  * Email: ${data.email}
  * Github Username: ${data.github}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing 
  ${data.contribution}

  ## Tests
  ${data.tests}

  
`;
}

module.exports = generateMarkdown;