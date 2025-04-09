# Setup instructions

# Playwright Test Project

This repository contains automated tests using [Playwright](https://playwright.dev/) for end-to-end testing.

# Getting Started

Follow these steps to clone the project, install dependencies, and run tests.

# Step 1: Clone the Repository

1. Open your terminal or command prompt.
2. Run the following commands:

git clone https://github.com/adamhunter-uk/playwright-test-ah.git
cd playwright-test-ah

# Step 2: Install Dependencies
Before running any tests, you need to install the required packages:

npm install

# Step 3: Run a Specific Test
To run a specific test (e.g., the User Registration Flow), use this command:

npx playwright test <specFile>
Replace <specFile> with the actual filename of the test, such as:

# example: 
npx playwright test userRegFlow.spec.ts

# Step 4: Run all Test files at once
npx playwright test

# Optional: Run Tests in Headed Mode and Debug mode

Headed mode:
npx playwright test userRegFlow.spec.ts --headed

Debug mode
npx playwright test userRegFlow.spec.ts --debug


# Explanation of your test architecture and patterns
- - When building the foundation of the tests, I started off simple by creating the each test with basic commands and no configuration until test would pass initial tests. Once they passed and I was confident they did what was being asked, I added in a loginPage.ts config file to controls certain checks/tests being carried out that would be used multiple times on the other tests (e.g accepting the annoying consent pop up on landing page and navigating to the login/sign up page).
- I also added a playwright.config.ts file to record failing tests by taking screenshots after fail and recording the test into a video that can be played back by hand. This can be toggled on/off also.
- The test is split into the 3 different tests using, using the confg files to save using the same test steps over again. 
- The folder structure is split into 2 seperate folders to distinguise which are the test elements and which are the configurations to help build the foundations.
- I've added extra comments to each step withing the tests explaining what these steps are doing.

# Challenges encountered
- Most of the challenges I encountered was mainly time, as the userRegFlow.spec.ts was fleshed out a lot more than the other tests but I felt as long as the test worked, improvements can be added later on.
- I could not get the filters to work on the products page, so I added a comment stating it may be a bug
- When the tests failed, it was difficult to figure out what I was doing wrong, even with the playwright.config in place. This was mainly down to typos on my behalf and using the correct steps to navigate/confirm text on the page.
- I also found the test site very clunky but that might be my QA initiative

# Improvements?
- I would improve my knowledge of using Playwright, as it is a powerful tool that can give great benefit to testing methodology for new and existing test frameworks. 
- I would also improve my code by having code reviews from other automation/developers. This would help both ways also, as I can get a better idea of other ways to improve my own code.
- I would also look into adding Cumcumber Gherkin steps to make the understanding of the test branch out to others who maybe aren't familiar with development and automation.
