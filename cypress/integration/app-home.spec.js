describe('Home Page', function () {
  beforeEach(() => {
    cy.visit('localhost:3333/')
  })
  describe('Extra large viewports', function() {
    beforeEach(() => {
      // Viewport = 1440, 900
      cy.viewport('macbook-15')
    })
    describe('App-Hero-Home', function() {
      it('Should render app-hero-home component', function() {
        cy.get('app-hero-home')
        .should('exist')
      })
      it('Should click the link and be directed', function() {
        cy.get('app-hero-home').within(() => {
          cy.get('span').last().should('have.attr', 'slot', 'link')
            .click()
        })
      })
      it('Should show specific banner background-image on extra large viewports', function() {
        cy.get('app-hero-home').within(() => {
          cy.get('header.hero-home')
          .and('have.css', 'background-image')
          .and('match', /bg-hero-town.jpg/)
        })
      })
    })
    describe('Services Section', function() {
      it('Should show the services section', function() {
          cy.get('#services').should('exist')
          cy.get('#services').should('be.visible')
      })
      it('Should be able to click on the options for Small, Mid-Size, and Enterprise companies', function() {
        cy.get('#nav-smallteam-tab').click()
        cy.get('#nav-midteam-tab').click()
        cy.get('#nav-enterprise-tab').click()
        cy.get('#nav-startup-tab').click()
      })
    })
    describe('First App-Cta', function() {
      it('Should exist and be visible', function() {
        cy.get('app-cta').first().should('exist')
        // Cypress Error: the element <app-cta> is not visible because it has an effective width and height of '0x0' pixels.
          // cy.get('app-cta').first()
         //   .should('be.visible')
      })
      it('Should be able to click the link', function() {
        cy.get('app-cta').first().within(() => {
          cy.get('span').last().should('have.attr', 'slot', 'link')
            .click()
        })
      })
    })
    describe('Process Section', function () {
      it('Should scroll to the process section', function() {
        cy.get('#process').scrollIntoView()
      })
    })
    describe('Perspectives Section', function () {
      it('Should scroll to the perspectives section', function() {
        cy.get('#perspectives').scrollIntoView()
      })
    })
    describe('About Section - App-Members Component', function() {
      it('Should be able to click links within app-members', function() {
        cy.get('#about').scrollIntoView()

        cy.get('#about > div > app-members > div > div').as('members')
        .its('length').should('be.gt', 13)

        cy.get('@members').contains('Software Engineer')
        cy.get('@members').contains('Designer')
        cy.get('@members').contains('Front End')

        cy.get('@members').find('div:nth-child(1)').find('div.col.text-center').within(function() {
          cy.get('a').should('have.attr', 'href')
          cy.get('a').should('have.attr', 'title')
          cy.get('a').should('have.attr', 'style')

          cy.get('a').eq(0).should('have.attr', 'href', 'mailto:jedi@openforge.io').click()
          cy.get('a').eq(1).should('have.attr', 'href', 'https://twitter.com/jedihacks').click()
          cy.get('a').eq(2).should('have.attr', 'href', 'https://github.com/jedihacks').click()
        })
      })
    })
    describe('Partners Section', function() {
      it('Should scoll to the partners section', function() {
        cy.get('.partners').scrollIntoView()
      })
    })
    describe('Footer', function() {
      it('Should be able to click the links in the app-footer', function() {
        cy.get('app-footer').scrollIntoView()
        cy.get('app-footer').should('exist').as('footer')
        // Opens mail:to, but freezes tests waiting for a page load
        // cy.get('@footer').contains('hello@').click()
      })
    })
    describe('Final App-Cta component', function() {
      it('Second app-cta component should be visible and link out', function() {
        cy.get('app-cta').last().scrollIntoView()
        cy.get('app-cta').last().should('have.attr', 'link-url', '/contact')
      })
    })
  });

  describe('Medium Viewports', function() {
    beforeEach(() => {
      // Bootstrap break point for large viewports
      cy.viewport(768, 991.98)
      cy.get('.services-content').as('services')
    })
    describe('App-Hero-Home component', function() {
      it('Should show specific banner background image on extra large viewports', function() {
        cy.get('app-hero-home').within(() => {
          cy.get('header.hero-home')
          .and('have.css', 'background-image')
          .and('match', /bg-hero-town-md.jpg/)
        })
      })
    })
    describe('Services Section', function() {
      it('Should not show the services section for now -- until it is optimized for mobile', function() {
          cy.get('#services').should('exist')
          cy.get('#services').should('not.be.visible')
      })
    })
    describe('First App-Cta', function() {
      it('Should not show the first app-cta component for now -- until it is optimized for mobile', function() {
        cy.get('app-cta').first().should('exist')
        cy.get('app-cta').first().should('not.be.visible')
      })
    })
  });

  describe('Small viewports', function() {
    beforeEach(() => {
      cy.viewport(575, 767.98)
    })
    describe('App-Hero-Home component', function() {
      it('Should show specific banner background image on extra large viewports', function() {
        cy.get('app-hero-home').within(() => {
          cy.get('header.hero-home')
          .and('have.css', 'background-image')
          .and('match', /bg-hero-town-sm.jpg/)
        })
      })
    })
    describe('Services Section', function() {
      it('Should not show the services section for now -- until it is optimized for mobile', function() {
          cy.get('#services').should('exist')
          cy.get('#services').should('not.be.visible')
      })
    })
    describe('First App-Cta', function() {
      it('Should not show the first app-cta component for now -- until it is optimized for mobile', function() {
        cy.get('app-cta').first().should('exist')
        cy.get('app-cta').first().should('not.be.visible')
      })
    })
  })
})
