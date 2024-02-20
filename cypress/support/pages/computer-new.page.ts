export default class ComputerNew {
  readonly _url = '/new'

  readonly pageName = '#main > h1'
  readonly computerNameInput = '#name'
  readonly introducedInput = '#introduced'
  readonly discontinuedInput = '#discontinued'
  readonly companyDropDownMenu = '#company'
  readonly createThisComputerButton = '#main > form > div > input'
  readonly createThisComputerButtonText = 'Create this computer'
  readonly cancelButton = '#main > form > div > a'
  readonly cancelButtonText = 'Cancel'
  readonly errorAlert = '#main > form > fieldset > div.clearfix.error > div > span'
  readonly deleteButton = '//*[@id="main"]/form[2]/input'

  getRandomInt (max: number): number {
    return Math.floor(Math.random() * (max - 1)) + 1
  }

  checkPageLoaded (): void {
    cy.get('body').should('be.visible')
    cy.get(this.pageName).should('have.text', 'Add a computer')
    cy.get(this.computerNameInput).should('be.visible')
    cy.get(this.introducedInput).should('be.visible')
    cy.get(this.discontinuedInput).should('be.visible')
    cy.get(this.companyDropDownMenu).should('be.visible')
    cy.get(this.createThisComputerButton)
      .should('be.visible')
      .should('have.value', this.createThisComputerButtonText)
    cy.get(this.cancelButton)
      .should('be.visible')
      .should('have.text', this.cancelButtonText)
  }

  checkAlertError (alertMessage: string): void {
    cy.get(this.errorAlert)
      .should('be.visible')
      .should('contain.text', alertMessage)
  }

  load (): void {
    cy.visit(this._url)
    this.checkPageLoaded()
  }

  setNewComputerName (text: string): void {
    cy.get(this.computerNameInput)
      .type(text)
      .should('have.value', text)
  }

  setIntroducedDate (text: string): void {
    cy.get(this.introducedInput)
      .type(text)
      .should('have.value', text)
  }

  setDiscontinuedDate (text: string): void {
    cy.get(this.discontinuedInput)
      .type(text)
      .should('have.value', text)
  }

  setCompanyName (text: string): void {
    cy.get(this.companyDropDownMenu)
      .select(text)
      .should('have.value', text)
  }

  getCreateButton (): Cypress.Chainable<JQuery<HTMLElement>> {
    const createBtn = cy.get(this.createThisComputerButton)
    createBtn
      .should('be.visible')
      .should('have.value', 'Create this computer')
    return createBtn
  }

  getCancelButton (): Cypress.Chainable<JQuery<HTMLElement>> {
    const cancelBtn = cy.get(this.cancelButton)
    cancelBtn
      .should('be.visible')
      .should('have.text', 'Cancel')
    return cancelBtn
  }

}
