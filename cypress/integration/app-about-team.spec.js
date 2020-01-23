describe('About page team', function () {
  var env = 'http://localhost:3333'
  beforeEach(() => {
    cy.visit(env + '/about')
  })
  describe('Meet Our Team', function () {
    it('Should be able to click links of app-members', function () {
      cy.get('#about').scrollIntoView()

      cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click()
      cy.wait(1000)
    })
    it('Should be 19 members', function () {
      cy.get('#about').scrollIntoView()
      cy.get('.member--text').as('members')
        .its('length').should('be.gt', 18)
    })
    it('All members must have titles', function () {
      cy.get('#about').scrollIntoView()
      cy.get('.member--text').as('members')

      cy.get('@members').contains('Software Engineer')
      cy.get('@members').contains('Game Designer')
      cy.get('@members').contains('Visual Designer')
      cy.get('@members').contains('Director of Operations')
      cy.get('@members').contains('QA Manager')
      cy.get('@members').contains('Marketing Coordinator')
      cy.get('@members').contains('Project Management')
      cy.get('@members').contains('Design Coordinator')
      cy.get('@members').contains('Marketing Specialist')
      cy.get('@members').contains('Founder and Head of Technology')
    })

  })
  describe('About-Header', function () {
    describe('Header Image', function () {
      it('The header must have an image', function () {
        cy.get('.hero > .col-12 > app-img')
          .should('exist')
      })
      it('The header must show the correct image', function () {
        cy.get('.hero > .col-12 > app-img')
          .should('have.prop', 'src').and('contain', 'about')
      })
    })
    describe('Header Button', function () {
      it('The button should take you to members', function () {
        cy.get('[data-cy=head-button]').click({ force: true })
      })
    })
  })
  describe('Our Values', function () {
    describe('Honesty Image', function () {
      it('Honesty image must exist', function () {
        cy.get('.honesty')
          .should('exist')
      })
      it('The honesty image must be correct', function () {
        cy.get('.honesty')
          .should('have.css', 'background').and('contain', 'assets/svg/about-graphic-honesty.svg')
      })
    })
    describe('Integrity Image', function () {
      it('Integrity image must exist', function () {
        cy.get('.integrity')
          .should('exist')
      })
      it('The integrity image must be correct', function () {
        cy.get('.integrity')
          .should('have.css', 'background').and('contain', 'assets/svg/about-graphic-integrity.svg')
      })
    })
    describe('Transparency Image', function () {
      it('transparency image must exist', function () {
        cy.get('.transparency')
          .should('exist')
      })
      it('The transparency image must be correct', function () {
        cy.get('.transparency')
          .should('have.css', 'background').and('contain', 'assets/svg/about-graphic-transparency.svg')
      })
    })
  })
})
