export default class ComputerList {
  readonly _url = '/computers'
  readonly pageName = '#main > h1'
  readonly alertMessage = '#main > div.alert-message.warning'
  readonly addANewComputerButton = '#add'
  readonly addANewComputerButtonText = 'Add a new computer'
  readonly filterByNameInput = '#searchbox'
  readonly filterByNamePlaceholder = 'Filter by computer name...'
  readonly filterByNameButton = '#searchsubmit'
  readonly filterByNameButtonText = 'Filter by name'
  readonly firstRegister = '#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'
  readonly paginationTable = '#pagination'
  readonly deleteButton = '#main > form.topRight > input'

  getnumberOfComputersRegistered (): Cypress.Chainable<string> {
    return cy.get(this.pageName)
    .invoke('text')
    .then( (text) => {
      return text.trim().split(' ')[0]
    })
    .as('numComputers')
  }

  checkPageLoaded (alertMessageText?: string): void {
    cy.get('body').should('be.visible')
    cy.get(this.pageName)
      .should('be.visible')
      .should('contain.text', 'computers found')
    cy.get(this.filterByNameInput)
      .should('be.visible')
      .should('have.attr', 'placeholder', this.filterByNamePlaceholder)
    cy.get(this.filterByNameButton)
      .should('be.visible')
      .should('have.value', this.filterByNameButtonText)
    cy.get(this.addANewComputerButton)
      .should('be.visible')
      .should('have.text', this.addANewComputerButtonText)
    if (alertMessageText) {
      cy.get(this.alertMessage)
        .should('be.visible')
        .should('contain.text', alertMessageText)
    }
  }

  load (): void {
    cy.visit(this._url)
    this.getnumberOfComputersRegistered()
    // cy.get('@numComputers').should('have.text', 574)
    this.checkPageLoaded()
  }

  fillSearch (text: string): void {
    cy.get(this.filterByNameInput).should('be.visible').type(text)
  }

  search (): void {
    cy.get(this.filterByNameButton).should('be.visible').click()
  }

  getAddButton (): Cypress.Chainable<JQuery<HTMLElement>> {
    const addBtn = cy.get(this.addANewComputerButton)
    addBtn.should('be.visible')
    return addBtn
  }

  getFilterButton (): Cypress.Chainable<JQuery<HTMLElement>> {
    const findBtn = cy.get(this.filterByNameButton)
    findBtn.should('be.visible')
    return findBtn
  }

  searchAComputer (name: string): void {
    cy.get(this.filterByNameInput).type(name).should('have.value', name)
  }

  getFirstRegister (text: string): Cypress.Chainable<JQuery<HTMLElement>> {
    const register = cy.get(this.firstRegister)
    register
      .should('be.be.visible')
      .should('contain.text', text)
    cy.get(this.paginationTable).should('be.visible')
    return register
  }

  selectRegister (text: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.firstRegister).should('be.visible').click()
  }

  deletRegister (text: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.deleteButton).should('be.visible').click()
  }

}
