/// <reference types="Cypress" />

context('Animalpage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('has the right app title', () => {
    cy.title().should('contain', 'React')
  })

  it('has a navigation', () => {
    cy.get('nav').should('have.length', 1)
  })
  it('has filters', () => {
    cy.get('option')
      .contains('alle Tiere')
      .next('option')
      .should('contain', 'Lieblingstiere')
  })
  it('has sort-functions', () => {
    cy.get('option')
      .contains('alphabetisch')
      .next('option')
      .should('contain', 'nach Station')
  })
})
