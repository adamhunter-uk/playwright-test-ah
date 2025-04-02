# Setup instructions

1. Clone the repo:
   - git clone https://github.com/adamhunter-uk/playwright-automation.git
   - cd playwright-automation

# Test execution commands
  - To run one of the tests, User Registration Flow type in the following commands into cmd prompt (replacing "specFile" with the name of the file you want):  npx playwright test specFile

Example: npx playwright test userRegFlow.spec.ts

  Add the following to you test for more configuration:
  --headed = watch the test live

# Explanation of your test architecture and patterns
- - When building the foundation of the tests, I started off simple by creating the each test with basic commands and no configuration until test would pass initial tests. Once they passed and I was confident they did what was being asked, I added in a loginPage.ts config file to controls certain checks/tests being carried out that would be used multiple times on the other tests (e.g accepting the annoying consent pop up on landing page and navigating to the login/sign up page).
- I also added a playwright.config.ts file to record failing tests by taking screenshots after fail and recording the test into a video that can be played back by hand. This can be toggled on/off also.
- The test is split into the 3 different tests using, using the confg files to save using the same test steps over again. 
- The folder structure is split into 2 seperate folders to distinguise which are the test elements and which are the configurations to help build the foundations.
- I've added extra comments to each step withing the tests explaining what these steps are doing.

# Challenges encountered** and how you solved them
- Most of the challenges I encountered was mainly time, as the userRegFlow.spec.ts was fleshed out a lot more than the other tests but I felt as long as the test worked, improvements can be added later on.
- I could not get the filters to work on the products page, so I added a comment stating it may be a bug
- When the tests failed, it was difficult to figure out what I was doing wrong, even with the playwright.config in place. This was mainly down to typos on my behalf and using the correct steps to navigate/confirm text on the page.
- I also found the test site very clunky but that might be my QA initiative

# Improvements?
- I would improve my knowledge of using Playwright, as it is a powerful tool that can give great benefit to testing methodology for new and existing test frameworks. 
- I would also improve my code by having code reviews from other automation/developers. This would help both ways also, as I can get a better idea of other ways to improve my own code.
- I would also look into adding Cumcumber Gherkin steps to make the understanding of the test branch out to others who maybe aren't familiar with development and automation.
