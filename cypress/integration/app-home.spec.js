describe('Home Page', function () {
  var env = 'http://localhost:3333';
  beforeEach(() => {
    cy.visit(env)
  })

  describe('Home Page', function () {
    describe('Navigation', function () {
      beforeEach(() => {
        cy.get('nav').as('navBar')
      })
      describe('Navigation from urls', function () {
        it('Should navigate to openforge.io/', function () {
          cy.visit('localhost:3333/')
        })
        it('Should navigate to openforge.io/contact', function () {
          cy.visit('localhost:3333/contact')
        })
        it('Should navigate to openforge.io/about', function () {
          cy.visit('localhost:3333/about')
        })
        it('Should navigate to openforge.io/partners', function () {
          cy.visit('localhost:3333/partners')
        })
        it('Should navigate to openforge.io/blog', function () {
          cy.visit('localhost:3333/blog')
        })

      })
    })
    describe('App-nav-header', function () {
      describe('Logo', function () {
        it('Nav bar should show the OpenForge logo', function () {
          cy.get('.navbar-brand')
            .should('exist')
            .and('be.visible')
        })
      })
      describe('Burger menu', function () {
        const lgSizes = ['macbook-15', 'macbook-13', 'macbook-11'];
        const mdSizes = ['ipad-2', 'ipad-mini'];
        const smSizes = ['iphone-xr', 'iphone-x', 'iphone-6+', 'iphone-6', 'iphone-5', 'iphone-4'];

        beforeEach(() => {
          cy.get('[data-cy=burgerMenu]').as('burgerMenu');
        })

        describe('Large viewports', function () {
          lgSizes.forEach((size) => {
            it(`Should not display burger menu on ${size} screen`, () => {
              cy.viewport(size)
              cy.get('@burgerMenu').should('not.be.visible');
            })
          })
        })
        describe('Medium viewports', function () {
          mdSizes.forEach((size) => {
            it(`Should display burger menu on ${size} screen`, function () {
              cy.viewport(size);
              cy.get('@burgerMenu').should('be.visible')
            });
          })
        });
        describe('Small viewports', function () {
          smSizes.forEach((size) => {
            it(`Should display burger menu on ${size} screen`, function () {
              cy.viewport(size);
              cy.get('@burgerMenu').should('be.visible')
            });
          })
        })
      })
      describe('Nav bar options', function () {
        beforeEach(() => {
          cy.get('nav').as('navBar');
        })
        it('Should have 9 navigation options (some are commented out)', function () {
          cy.get('a.nav-link').should('have.length', 9)
        })

      })
      it('Should have a tags for Mobile Measures project that navigate to the Apple Store and Google Play Store', function () {
        // Apple
        cy.get('[data-cy=mobilemeasures-apple]')
          .should('have.attr', 'href')
          .and('contain', 'apps.apple.com')
          .and('contain', 'mobile-measures')

        // Google
        cy.get('[data-cy=mobilemeasures-google]')
          .should('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'mobilemeasures')
      })

      it('Should have a tags for LoudCloud that navigate to the Apple Store and Google Play Store', function () {
        cy.get('[data-cy=loudcloud-apple]')
          .should('have.attr', 'href')
          .and('contain', 'itunes.apple.com')
          .and('contain', 'loudcloud')

        cy.get('[data-cy=loudcloud-google]')
          .should('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'loudcloud')
      });

      it('Should have a tags for Voyage that navigate to the Apple Store and Google Play Store', function () {
        cy.get('[data-cy=voyage-apple]')
          .should('have.attr', 'href')
          .and('contain', 'itunes.apple.com')
          .and('contain', 'the-voyage')

        cy.get('[data-cy=voyage-google]')
          .should('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'carecaminnovations')
      });

      describe('Process Section', function () {
        it('Should scroll to the process section', function () {
          cy.get('#process').scrollIntoView()
        })
        it('Should have carousel components and activeIndex prop to change', function () {
          cy.get('app-carousel-indicators').should('exist')
            .and('have.prop', 'activeIndex')
        })
        it('Active class should show on one carousel list element at a time', function () {
          cy.get('app-carousel-indicators').within(() => {
            cy.get('li').first().should('have.class', 'active');
            // Wait for carousel list el to change on the page
            cy.wait(2000);
            cy.get('li:first').next().should('have.class', 'active');
            cy.get('li').first().should('not.have.class', 'active');
          })
        })
        it('Process images should show in correct order', function () {
          cy.get('[data-cy=capp-img]').each(($el, index) => {
            switch (index) {
              case 0:
                cy.wrap($el).should('have.prop', 'src').and('contain', 'discovery')
                break;

              case 1:
                cy.wrap($el).should('have.prop', 'src').and('contain', 'design')
                break;

              case 2:
                cy.wrap($el).should('have.prop', 'src').and('contain', 'development')
                break;

              case 3:
                cy.wrap($el).should('have.prop', 'src').and('contain', 'deploy')
                break;

              case 4:
                cy.wrap($el).should('have.prop', 'src').and('contain', 'userfeedback')
                break;
            }
          })
        })
      })
      describe('App-Cta', function () {
        it('Should exist', function () {
          cy.get('app-cta').should('exist')
        })
        it('Should navigate to the contact page', function () {
          cy.get('app-cta').within(() => {
            cy.get('stencil-route-link')
              .should('exist')
              .should('have.prop', 'url')
              .and('contain', '/contact')
          })
        })
      })
      describe('Footer', function () {
        beforeEach(() => {
          cy.get('app-footer').as('footer')
        })
        it('Should exist and be visible', function () {
          cy.get('@footer').scrollIntoView()
          cy.get('@footer').should('exist')
        })
        it('Should link to company e-mail', function () {
          cy.get('@footer').contains('hello')
            .should('have.attr', 'href', 'mailto:hello@openforge.io')
        })
      })
    });
  })
