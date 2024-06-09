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

Then(/^validate below menu items are displayed$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()

  smartB2.getMenu().each(($el, index) => {
    cy.wrap($el).should('contain', arr[index])
  })
})

Then(/^validate user sees "([^"]*)" message$/, (message) => {
  smartB2.getEmptyOrderMessage().should('contain', message)
})

When(/^user clicks on "([^"]*)" menu item$/, (label) => {
  smartB2.selectMenu(label)
})

Then(/^user enters all product information$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()
  smartB2.addProduct(...arr)
})

Then(/^user enters all address information$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()
  smartB2.addAddress(...arr)
})

Then(/^user enters all payment information$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()
  smartB2.addPayment(...arr)
})

Then(/^validate all information entered displayed correct with the order$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()

  smartB2.getOrderRowDataByLine(1).each(($el, i) => {
    if (i !== 0 && i !== 4 && i !== 12) {
      cy.wrap($el).should('contain', arr[i - 1])
    }
  })
})

// Then(/^validate all information entered displayed correct with the order$/, (dataTable) => {
//   const arr = dataTable.rawTable.flat()

//   let numberOfRow
//   smartB2.getCheckBoxes().then(function ($el) {
//     numberOfRow = $el.length
//     validateOrderInformation(arr, numberOfRow)
//   })

//   function validateOrderInformation(dataArray, numberOfRows) {
//     for (let i = 1; i <= numberOfRows; i++) {
//       smartB2.getOrderRowDataByLine(i).each(($el, index) => {
//         if (index !== 0 && index !== 12) {
//           cy.wrap($el).should('contain', dataArray[index - 1])
//         }
//       })
//     }
//   }
// })
