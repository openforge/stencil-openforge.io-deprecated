describe('Home Page', function () {
  beforeEach(() => {
    cy.visit('localhost:3333/')
    cy.get('nav > div > button').as('burgerMenu')
  })
  describe('Navigation', function () {
    beforeEach(() => {
      cy.visit('localhost:3333')
      cy.get('nav').as('navBar')
    })
    describe('Logo', function() {
      it('Nav bar should show the OpenForge logo', function() {
        cy.get('.navbar-brand')
          .should('exist')
          .and('be.visible')
      })
    })
    describe('Nav bar options', function() {
      it('Should have 5 navigation options', function() {
        cy.get('a.nav-link').should('have.length', 5)
      })
      it('About should exist and be visible in the nav bar', function() {
        cy.get('@navBar')
          .contains('About')
          .should('exist')
          .and('be.visible')
      })
      it('Contact should exist and be visible in the nav bar', function() {
        cy.get('@navBar')
          .contains('Contact')
          .should('exist')
          .and('be.visible')
      })
      it('Opportunities should exist and be visible in the nav bar', function() {
        cy.get('@navBar')
          .contains('Opportunities')
          .should('exist')
          .and('be.visible')
      })
    })
   describe('Should have the correct href attributes for the navigation options', function() {
    beforeEach(() => {
      cy.get('stencil-route-link').as('route')
    })
      it('About link', function() {
        cy.get('@route').contains('About')
        .and('have.attr', 'href')
        .and('match', /about/)
      })
      it('Contact link', function() {
        cy.get('@route').contains('Contact')
        .and('have.attr', 'href')
        .and('match', /contact/)
      })
      it('Opportunities link', function() {
        cy.get('@route').contains('Opportunities')
        .and('have.attr', 'href')
        .and('match', /opportunities/)
      })
      it('GitHub link', function() {
        cy.get('@navBar').within(() => {
          cy.get('a').should('have.attr', 'href', 'https://github.com/openforge')
        })
      })
    })
    describe('Stencil route links should navigate to the correct pages on click', function() {
      beforeEach(() => {
        cy.get('stencil-route-link').as('route')
      })
      it('About page link', function () {
        cy.get('@route').within(() => {
          cy.get('a').contains('About').click()
        })
      })
      it('Contact page link', function () {
        cy.get('@route').within(() => {
          cy.get('a').contains('Contact').click()
        })
      })
      it('Opportunities page link', function () {
        cy.get('@route').within(() => {
          cy.get('a').contains('Opportunities').click()
        })
      })
      it('Home page link', function () {
        cy.get('@route').within(() => {
          cy.get('a').contains('Home').click()
        })
      })
      it('GitHub link', function() {
        cy.get('@navBar').within(() => {
          cy.get('a').click()
        })
      })
    })
    describe('Navigation from urls', function() {
      it('Should navigate to openforge.io/contact', function() {
        cy.visit('localhost:3333/contact')
      })
      it('Should navigate to openforge.io/oppportunities', function() {
        cy.visit('localhost:3333/opportunities')
      })
      it('Should navigate to openforge.io/oppportunities', function() {
        cy.visit('localhost:3333/about')
      })
      it('Should navigate to openforge.io/', function() {
        cy.visit('localhost:3333/')
      })
    })
  })

  describe('Extra large viewports', function() {
    beforeEach(() => {
      // Viewport = 1440, 900
      cy.viewport('macbook-15')
    })
    describe('Burger menu', function() {
      it('Should not be visible', function() {
        cy.get('@burgerMenu').should('not.be.visible')
      })
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
        // cy.get('app-cta').first()
        //   .should('be.visible')
        // Cypress Error: the element <app-cta> is not visible because it has an effective width and height of '0x0' pixels.
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
    describe('Final App-Cta component', function() {
      it('Second app-cta component should be visible and link out', function() {
        cy.get('app-cta').last().scrollIntoView()
        cy.get('app-cta').last().should('have.attr', 'link-url', '/contact')
      })
    })
    describe('Footer', function() {
      beforeEach(() => {
        cy.get('app-footer').as('footer')
      })
      it('Should exist and be visible', function() {
        cy.get('@footer').scrollIntoView()
        cy.get('@footer').should('exist')
        // cy.get('@footer').should('be.visible')
        // Cypress Error: the element <app-footer> is not visible because it has an effective width and height of '0x0' pixels.
      })
      it('Should link to company e-mail', function() {
        cy.get('@footer').contains('hello')
        .should('have.attr', 'href', 'mailto:hello@openforge.io')
      })
      it('Should have partner links as app-img components within the app-footer', function(){
        cy.get('app-footer').within(() => {
          cy.get('app-img').should('have.length.gte', 3)
        })
      })
    })
  })

  describe('Medium Viewports', function() {
    beforeEach(() => {
      // Bootstrap break point for medium viewports
      cy.viewport(767, 991.98)
      cy.get('.services-content').as('services')
    })
    describe('Burger menu', function() {
      it('Should not be visible', function() {
        cy.get('@burgerMenu').should('not.be.visible')
      })
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
    describe('Burger menu', function() {
      it('Should be visible', function() {
        cy.get('@burgerMenu')
          .should('exist')
          .should('be.visible')
      })
      it('Should be clickable', function() {
        cy.get('@burgerMenu').click()
        // BUG -- nothing is happening on click of the burger menu
      })
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
