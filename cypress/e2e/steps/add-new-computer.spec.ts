import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import { faker } from '@faker-js/faker'
import moment from 'moment'
import ComputerList from '../../support/pages/computer-list.page'
import ComputerNew from '../../support/pages/computer-new.page'

const computerName = `${faker.word.sample()}-${faker.word.sample()}`
const introduceValidFormatDate = moment().format('YYYY-MM-DD')
const introduceInvalidFormatDate = moment().format('DD-MM-YYYY')
const discontinuedDate = moment().add(2, 'years').format('YYYY-MM-DD')

Given('I go to the Computers Database page', function () {
  this.browser = new ComputerList()
  this.browser.load()
})

Given('I see "Add a new computer" button', function () {
  this.addBtn = this.browser.getAddButton()
})

Given('I see "Filter by name" button', function () {
  this.filterBtn = this.browser.getFilterButton()
})

Given('I click on "Add a new computer" button', function () {
  this.addBtn.click()
})

Given('I select a computer from the list', function () {
  this.addBtn.click()
})

Given('I click on "Filter by name" button', function () {
  this.browser.getFilterButton().click()
})

Given('I am on the "Add a computer" page', function () {
  this.newComputerPage = new ComputerNew()
  this.newComputerPage.checkPageLoaded()
})

When('I fill out a valid "Computer name"', function () {
  this.newComputerPage.setNewComputerName(computerName)
})

When('I type the computer name inside the filter input', function () {
  this.browser.searchAComputer(computerName)
})

When('I type "Apple" inside the filter input', function () {
  this.browser.searchAComputer("Apple")
})

When('I fill out a valid "Introduce" date', function () {
  this.newComputerPage.setIntroducedDate(introduceValidFormatDate)
})

When('I fill out an invalid "Introduce" date', function () {
  this.newComputerPage.setIntroducedDate(introduceInvalidFormatDate)
})

When('I fill out a valid "Discontinued" date', function () {
  this.newComputerPage.setDiscontinuedDate(discontinuedDate)
})

When('I select a company from the "Company" list', function () {
  this.newComputerPage.setCompanyName(1)
})

When('I click on "Create this computer" button', function () {
  this.newComputerPage.getCreateButton().click()
})

When('I click on "Cancel" button', function () {
  this.newComputerPage.getCancelButton().click()
})

Then('I am redirected to the computer list page', function () {
  this.browser.checkPageLoaded()
})

Then('I see a notification {string}', function () {
  this.browser.checkPageLoaded(`Computer ${computerName} has been created`)
})

Then('I see a red alert with an error message for the Computer name input', function () {
  this.newComputerPage.checkAlertError('Failed to refine type')
  // Message error is not good enough: Failed to refine type : Predicate isEmpty() did not fail.
})

Then('I see a red alert with an error message for the Introduce input', function () {
  this.newComputerPage.checkAlertError('Failed to decode date')
  // Message error is not good enough: Failed to refine type : Predicate isEmpty() did not fail.
})

Then('I see a red alert with an error message for the Discontinued input', function () {
  this.newComputerPage.checkAlertError('Failed to decode date')
  // Message error is not good enough: Failed to refine type : Predicate isEmpty() did not fail.
})

Then('I see {string} in the list of computers', function (name: string) {
  this.browser.getFirstRegister(name)
})

When('I select {string} in the list of computers', function (name: string) {
  this.browser.selectRegister(name)
})

Then('I see the computer in the list of computers', function (name: string) {
  this.browser.getFirstRegister(name)
  // BUG: new computeer is not being registered
})

When('I click on {string} button', function (name: string) {
  this.browser.deletRegister(name)
})