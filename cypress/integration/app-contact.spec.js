describe('Contact Page', function () {
  var env = 'https://openforge.io';
  beforeEach(() => {
    cy.visit( env + '/contact')
    cy.get('button[type=submit]').as('submitBtn')
  })

  describe('Header', function() {
    it('Header should display with appropriate text content within it', function() {
      const h2Content =  'Let\'s Work Together'
      const pContent = 'Request'

      cy.get('header')
        .should('exist')
        .and('be.visible')
      cy.get('.hero')
        .contains(h2Content)
        .and('be.visible')
      cy.get('.hero')
        .contains(pContent)
        .and('be.visible')
    })

    it('Should contain a Request Now button that scrolls to the form on click', function() {
      cy.get('header')
        .find('.btn')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Request Free Quote')
        .click()
      cy.get('#second-content').click()
    })
  })

  describe('Contact Form', function() {
    let nameField
    let emailField
    let phoneField
    let messageField

    describe('Successful form submission', function () {
      beforeEach(() => {
        cy.get('input[name=name]').type('Testing')
        cy.get('input[name=email]').type('testEmail@gmail.com')
        cy.get('input[name=phone]').type('1459341234')
        cy.get('input[name=message]').type('This is a test message')
        cy.get('@submitBtn').click()
      })

      it('Should show a success message on submit when all form values have been filled out', function() {
        cy.contains('Thank you')
      })

      it('All fields should be clear after successful form submission', function() {
       cy.get('input[name=name]').should('not.have.value', 'Testing')
       cy.get('input[name=email]').should('not.have.value', 'testEmail@gmail.com')
       cy.get('input[name=phone]').should('not.have.value', '1459341234')
       cy.get('input[name=message]').should('not.have.value', 'This is a test message')

      })
    })
    describe('Unsucessful form submission', function() {
      it('DOM should not show success message when all fields of the form are not filled out', function () {
        nameField = cy.get('input[name=name]')
        .type('Test Name')
        cy.get('@submitBtn').should('be.disabled')
      })
    })
  })
})
