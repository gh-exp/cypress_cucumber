class SmartBearWeb {
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

  getOrderRowDataByLine(num) {
    return cy.get(`tbody > :nth-child(${num + 1}) > td`)
  }

  // Method

  selectMenu(label) {
    this.getMenu().contains(label).click()
  }

  addAddress(name, street, city, state, zip) {
    cy.get('#ctl00_MainContent_fmwOrder_txtName').type(name)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type(street)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type(city)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox4').type(state)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type(zip)
  }
  addProduct(product, quantity) {
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select(product)
    cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type(quantity)
  }
  addPayment(card, cardN, cardExp) {
    cy.get('#ctl00_MainContent_fmwOrder_cardList').contains(card).prev().check()
    cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type(cardN)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type(cardExp)
  }
}

module.exports = SmartBearWeb
