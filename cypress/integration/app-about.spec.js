describe('About Page', function () {
  beforeEach(() => {
    cy.visit('localhost:3333/about')
  })

  describe('HTML elements', function() {
    describe('Header', function () {
      it('Should display header content', function() {
        const h2Text = 'Powered by engineers'
        const pText = 'We believe that your success is our success.'
        // Header has a class of hero
        cy.get('.hero').then(($header) => {
          const txt = $header.text()

          expect(txt).contain(h2Text)
          expect(txt).contain(pText)

          cy.contains('Learn More')
            .should('exist')
            .should('be.visible')
            .click()
            cy.screenshot('AboutPage-Click-Learn More')
        })
      })
    })

    describe('Values Section', function () {
      it('Should display content in the values section', function() {
        cy.get(".values")
        .should('exist')

        cy.get(".values")
        .contains('Key Values')
        .should('be.visible')

        cy.get(".values")
        .contains('Transparency')
        .should('be.visible')

        cy.get(".values")
        .contains('transparent')
        .should('be.visible')

        cy.get(".values")
        .contains('Integrity')
        .should('be.visible')

        cy.get(".values")
        .contains('insights')
        .should('be.visible')

        cy.get(".values")
        .contains('Trust')
        .should('be.visible')

        cy.get(".values")
        .contains('help')
        .should('be.visible')
      })
    })

    describe('Diversity Section', function() {
      it('App-header should exist here with attributes and values', function() {
        cy.get('#diversity > app-header')
        .should('exist')
        .should('have.attr', 'background-url', 'assets/bg-header-collaboration.jpg')
        .should('have.attr', 'link-url', '#team')
        // .click()
        // ^ does not work on the link-url attribute = 'cy.click() failed because this element is not visible'
        // Will need test click on link-url to scroll to team section
        cy.get('app-header').contains('Diversity')
      })
    })


    describe('Team Section', function() {
      it('Should show Meet the Team section with app-members component', function() {
        cy.get('#team')
          .children()
          .find('app-members > div')
          .should('exist')
          .should('be.visible')
      })
    })

    describe('App-Cta Component', function () {
      it('Should exist and be visible', function() {
        cy.get('app-cta')
          .should('exist')
          .should('be.visible')
      })

      it('Should show the the link-url attribute and value to link to', function() {
        cy.get('app-cta').should('have.attr', 'link-url', '/contact')
      })

      it('Should navigate to contact page', function() {
        cy.get('app-cta').contains('Get in touch')
        .click()
        cy.screenshot('AboutPage-Click-App-Cta')
      })
    })
  })
})
