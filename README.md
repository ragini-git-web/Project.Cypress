Project Title - TutorialsNinja(Qafox.com) Cypress Automation Scripts

his repository contains a Cypress test suite automating various functionalities on the TutorialsNinja demo website 
(https://tutorialsninja.com/demo/)

Objectives:

To check all the key functionalities of HomePage is working fine 
1-search bar Functionality
2-Add to cart functionality
3-Alert Messages 
4-Navigations


Tools Used:

Programming Language: JavaScript
Framework: Cypress, Mocha 
IDE: Visual Studio Code
Browser: Chrome (or default Cypress browser)


Pre-requisites:

Basic understanding of JavaScript programming.
Familiarity with HTML elements (like id, class, name)


Instructions:

Setup:
-Install Node.js and npm.
-Open a terminal and navigate to the project directory.
-Run npm install to install Cypress dependencies.

Project Structure:
cypress/ - Contains Cypress test files and supporting files.
integration/ -  Contains the actual test scripts.
support/ - Contains utility functions and custom commands.
fixtures/- Holds test data and configuration files.
config.js - Stores environment configurations like the base URL.

Running Tests:
-From the project directory, npx cypress run command launch the Cypress test runner.
-Choose a test file to execute.

Code Breakdown
HomePage- Represents the main page of the TutorialsNinja website
commands.js- Contains custom commands like login, logout, etc.
login.js - Login to the page by entering Valid data 
AddtoCart.js - search the product, open the product, Adding to the cart 
Search.js - Search bar functionality enter multiple  products and check that shows all products or not
Nevigations.js - navigate the page functionalities
MouseHover.js - Checking mousehover actions for various products 
Logo.js - check the Logo of the page 

Key Features
Configuration File - config.js for storing environment variables like base URL.
Assertions - Verify expected behavior using Cypress assertions.
Waits- Ensure elements are visible and interactive before performing actions.
Screenshots- Capture screenshots on test failures for debugging.


Project Setup:
-Clone the repository.
-Install dependencies: npm install.
-Update the config.js file with the desired base URL.
-Run tests: npx cypress open.

GitHub:
This project will be pushed to a new GitHub repository for version control and collaboration

































