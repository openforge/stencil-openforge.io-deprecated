# Cypress Testing

##### [Cypress Documentation] (https://www.cypress.io/)

#### Installing cypress:
`npm install cypress`

#### To run tests:
**Open the terminal:**

1. Start the local dev server using: `npm run dev --es5`

2. In a separate terminal window run: `npm run cypress` - this will open the test runner which will allow you to either run all of the tests, or select individual test files.

#### To write or edit tests:

All Cypress E2E testing files live within the cypress/integration folder.

#### To run individual test suites or blocks:

Add .only before the describe suites or it blocks in the cypress/integration/.spec files, such as:

`describe.only('Contact Form')`, or

`it.only('Should...)`

#### To capture images of how the application appears after a given action:

Add `cy.screenshot('nameOfYourChoosing')` inside of any 'it' block.
The image will then appear as a file within the cypress/screenshots directory after you run the tests.

