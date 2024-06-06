const SmartBear = require('./SmartBearLoginPage')

class SmartBearWeb extends SmartBear {
  // Locators

  getCheckBoxes() {
    return cy.get('[type="checkbox"]')
  }

  getCheckAllButton() {
    return cy.get('#ctl00_MainContent_btnCheckAll')
  }

  getUncheckAllButton() {
    return cy.get('#ctl00_MainContent_btnUncheckAll')
  }

  getDeleteAllButton() {
    return cy.get('#ctl00_MainContent_btnDelete')
  }

  getEmptyOrderMessage() {
    return cy.get('#ctl00_MainContent_orderMessage')
  }

  getMenu() {
    return cy.get('#ctl00_menu > li')
  }

  getProcessButton() {
    return cy.get('#ctl00_MainContent_fmwOrder_InsertButton')
  }

  // Method

  // validateEmptyOrderMessage(message) {
  //   this.getEmptyOrderMessage()
  // }

  selectMenu(label) {
    this.getMenu().contains(label).click()
  }

  addAddress(name, street, city, state, zip) {
    cy.get('input[name="ctl00$MainContent$fmwOrder$txtName"]').type(name)
    cy.get('input[name="ctl00$MainContent$fmwOrder$TextBox2"]').type(street)
    cy.get('input[name="ctl00$MainContent$fmwOrder$TextBox3"]').type(city)
    cy.get('input[name="ctl00$MainContent$fmwOrder$TextBox4"]').type(state)
    cy.get('input[name="ctl00$MainContent$fmwOrder$TextBox5"]').type(zip)
  }
  addProduct(product, quantity) {
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select(product)
    cy.get('input[name="ctl00$MainContent$fmwOrder$txtQuantity"]').type(quantity)
  }
  addPayment(card, cardN, cardExp) {
    cy.get('#ctl00_MainContent_fmwOrder_cardList').contains(card).prev().check()
    cy.get('input[name="ctl00$MainContent$fmwOrder$TextBox6"]').type(cardN)
    cy.get('input[name="ctl00$MainContent$fmwOrder$TextBox1"]').type(cardExp)
  }
}
module.exports = SmartBearWeb
