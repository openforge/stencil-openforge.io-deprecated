 describe('About page', function() {
  var env = 'http://localhost:3333'
  beforeEach(() => {
    cy.visit(env + '/about')
  })
})

    // Moving this here for now -- from the old home page, but some of this will be relevant here

    // describe('Perspectives Section', function () {
    //   it('Should scroll to the perspectives section', function() {
    //     cy.get('#perspectives').scrollIntoView()
    //   })
    // })
    // describe('About Section - App-Members Component', function() {
    //   it('Should be able to click links within app-members', function() {
    //     cy.get('#about').scrollIntoView()

    //     cy.get('#about > div > app-members > div > div').as('members')
    //     .its('length').should('be.gt', 13)

    //     cy.get('@members').contains('Software Engineer')
    //     cy.get('@members').contains('Designer')
    //     cy.get('@members').contains('Front End')

    //     cy.get('@members').find('div:nth-child(1)').find('div.col.text-center').within(function() {
    //       cy.get('a').should('have.attr', 'href')
    //       cy.get('a').should('have.attr', 'title')
    //       cy.get('a').should('have.attr', 'style')

    //       cy.get('a').eq(0).should('have.attr', 'href', 'mailto:jedi@openforge.io').click()
    //       cy.get('a').eq(1).should('have.attr', 'href', 'https://twitter.com/jedihacks').click()
    //       cy.get('a').eq(2).should('have.attr', 'href', 'https://github.com/jedihacks').click()
    //     })
    //   })
    // })
