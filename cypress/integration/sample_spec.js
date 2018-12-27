describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })
  describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(false)
    })
  })
  describe('My First Test', function() {
    it('Visits contact page', function() {
      cy.visit('https://openforge.io/contact')
      cy.contains('Read our SLA').click()
      // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/service-level-agreement')
    })
  })