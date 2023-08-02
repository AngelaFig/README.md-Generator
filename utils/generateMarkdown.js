// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }else if(license === 'Boost'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }else if (license === 'None'){
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return`(https://opensource.org/licenses/MIT`
  }else if(license === 'Apache'){
    return `(https://opensource.org/licenses/Apache-2.0)`
  }else if(license === 'Boost'){
  return `(https://www.boost.org/LICENSE_1_0.txt)`
  }else if(license === 'None'){
    return ''
  }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT'){
    return `This License is provided by MIT`
  }else if(license === 'Apache'){
    return `This License is provided by Apache`
  }else if(license === 'Boost'){
    return  `This License is provided by Boost`
  }else if(license ==='None'){
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  
  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?
  
  ## Table of Contents 
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license) 
  
  ## Installation 
  ${data.installation}
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage 
  ${data.usage}
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  ![alt text](assets/images/screenshot.png)
 
  ## License 
  ${renderLicenseSection(data.license)}
  
  ---
  
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  ${data.tests}
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.

  ## Questions
  ${data.questions}
  
`;
}

module.exports = generateMarkdown;
