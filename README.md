# Spotify test

## Introduction
This project is a test automation framework for testing the login and list creation functionalities of the Spotify website. The tests have been implemented using Cypress, a powerful and easy-to-use JavaScript-based testing framework.

## Aproach
This project contains two test scenarios:
 - `list.cy.js`: This test scenario tests the creation and deletion of a list of songs in Spotify.
 - `login.cy.js`: This test scenario validates the login functionality of the Spotify website. It covers different test cases such as successful login, incorrect credentials, and password reset.

## Requirements

- [Node.js](https://nodejs.org/) V18  or higher.
- [Chrome](https://www.google.com/chrome/) V111  or higher.

## Setup
1 - Clone this repository to your local machine and navigate to the project directory.
2 - Run `npm install` to install the required dependencies.

## Test execution
Before running the tests, you must have a valid Spotify account. Replace the placeholders USERNAME and PASSWORD in the command line.

To run the tests in visual mode, use the following command:
```
npm start -- --env user=USERNAME,pass=PASSWORD
```
To run the tests in headless mode, use the following command:
```
npm test -- --env user=USERNAME,pass=PASSWORD
```

## Test Results
When you run the tests in visual mode, you can see the Chrome browser executing the test scenarios just like a real user. The test results are displayed on the screen, allowing you to step through each test case.
When you run the tests in headless mode, you will only see the command line output. The test results include a summary of the tests executed and a directory containing videos and screenshots of the test runs, including any failed tests. You can use these videos and screenshots for further analysis and debugging.
