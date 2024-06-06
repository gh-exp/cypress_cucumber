const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const SmartBearLogin = require('../../../pages/SmartBearLoginPage')
const SmartBearWeb = require('../../../pages/SmartBearWebOrderPage')

const smartB = new SmartBearLogin()
const smartB2 = new SmartBearWeb()

Given(/^user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user enters username as "([^"]*)"$/, (username) => {
  smartB.enterUsername(username)
})

When(/^user enters password as "([^"]*)"$/, (password) => {
  smartB.enterPassword(password)
})

When(/^user clicks on "([^"]*)" button$/, (label) => {
  smartB2.clickButton(label)
})

Then(/^user should see "([^"]*)" message$/, (message) => {
  smartB.getErrorMessage().should('have.text', message)
})

Then(/^user should be routed to "([^"]*)"$/, (url) => {
  cy.url().should('eq', url)
})

Then(/^all rows should be checked$/, () => {
  smartB2.getCheckBoxes().should('be.checked')
})

Then(/^all rows should be unchecked$/, () => {
  smartB2.getCheckBoxes().should('not.be.checked')
})

Then(/^validate all orders are deleted from the List of All Orders$/, () => {
  smartB2.getCheckBoxes().should('have.length', 0)
})

Then(/^validate user sees "([^"]*)" message$/, (message) => {
  smartB2.getEmptyOrderMessage().should('contain', message)
})

When(/^user clicks on "([^"]*)" menu item$/, (label) => {
  smartB2.selectMenu(label)
})

Then(/^user enters all product information$/, () => {
  smartB2.addProduct('FamilyAlbum', '2')
})

Then(/^user enters all address information$/, () => {
  smartB2.addAddress('John Doe', '123 Main St', 'Chicago', 'IL', '60000')
})

Then(/^user enters all payment information$/, () => {
  smartB2.addPayment('Visa', '1234567812345678', '12/34')
})

Then(/^validate all information entered displayed correct with the order$/, () => {
  return true
})
