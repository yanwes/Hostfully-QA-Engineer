# Hostfully QA Engineer Cypress exercise

### General settings

Install and set configuration if needed for:

- [Node.js](https://nodejs.org/en/download/) (version used: v20.10.0)
- Cypress (version used: 13.6.1):

    `$ npm install cypress --save-dev`

- Install dependencies:

    `$ npm install`

### Manual execution

- Run the tests without final report (merged) generation:

    `npm run test`

- Run the tests with final report generation. It will be saved locally at [cypress/report/mochareports/report_final.html](cypress/report/mochareports/report_final.html):

    `npm run test-report`

- Open Cypress Runner IDE:

    `npm run cypress-open`


### Deliveries

#### Summary of findings

##### BUG-001: Computers are not being real saved

- **Description:** The new computers are not being added even though the system shows that it was.
- **Severity:** Critical
- **Steps to Reproduce:**
  1. Add a new computer with an unique name
  2. From the list of computers page, right the new computer name and click on the Filter button
- **Actual Result:** System shows "Nothing to display"
- **Expected Result:** System should show the new computer added

##### BUG-002: Edited Computers Not Being Saved
- **Description:** Changes made to computer details are not saved after editing, despite confirmation messages indicating success.
- **Severity:** Critical
- **Steps to Reproduce:**
  1. Select an existing computer from the list and click to edit its details.
  2. Change any detail (e.g., name, date) and submit the changes.
- **Actual Result:** Upon re-opening the computer's details, none of the changes are saved.
- **Expected Result:** All changes should be saved and reflected when viewing the computer's details again.

##### BUG-003: Computers Not Being Deleted
- **Description:** Attempts to delete computers do not remove them from the list, even though a success notification is displayed.
- **Severity:** Critical
- **Steps to Reproduce:**
  1. From the list of computers, select a computer to delete.
  2. Confirm the deletion operation.
- **Actual Result:** The computer still appears in the list after attempting deletion.
- **Expected Result:** The computer should be removed from the list and no longer appear after deletion.

## HOW I APPROACHED THE TASK AND WHY I MADE CERTAIN DECISIONS

I create a CRUD to validade the application. I used the Page Object Model to create the tests. I used the mochawesome to generate the report. 

## POSSIBLE ERROR AND RESOLLUTION

The errors are caused by unintended 303 status codes. Inspect your server's routing and response handling to ensure it properly manages requests, especially POST actions, without unnecessary redirects. If it's redirecting incorrectly, adjust the server code or settings to match the desired application behavior.