// / <reference types="Cypress" />

describe('Navigation', function () {
  beforeEach(() => {
    cy.visit('localhost:3333')
    cy.get('nav').as('navBar')
  })

 describe('Should have the correct href attributes for the navigation options', function() {
    it('Home link', function() {
      cy.get('@navBar').contains('Home')
      .and('have.attr', 'href', '/')
    })
    it('About link', function() {
      cy.get('@navBar').contains('About')
      .and('have.attr', 'href')
      .and('match', /about/)
    })
    it('Contact link', function() {
      cy.get('@navBar').contains('Contact')
      .and('have.attr', 'href')
      .and('match', /contact/)
    })
    it('Opportunities link', function() {
      cy.get('@navBar').contains('Opportunities')
      .and('have.attr', 'href')
      .and('match', /opportunities/)
    })
  })

  describe('Should navigate to the correct pages on click from the nav bar', function() {
    it('About page link', function () {
      cy.get('@navBar').contains('About').click()
    })
    it('Contact page link', function () {
      cy.get('@navBar').contains('Contact').click()
    })
    it('Opportunities page link', function () {
      cy.get('@navBar').contains('Opportunities').click()
    })
    it('Home page link', function () {
      cy.get('@navBar').contains('Home').click()
    })
  })

  describe('Navigation from url links', function() {
    it('Should navigate to openforge.io/about', function() {
      cy.visit('localhost:3333/about')
    })
    it('Should navigate to openforge.io/contact', function() {
      cy.visit('localhost:3333/contact')
    })
    it('Should navigate to openforge.io/oppportunities', function() {
      cy.visit('localhost:3333/opportunities')
    })
    it('Should navigate to openforge.io/', function() {
      cy.visit('localhost:3333/')
    })
  })
})
