describe('Home Page', function () {
  var env = 'http://localhost:3333';
  beforeEach(() => {
    cy.visit(env);
  });

  describe('Home Page', function () {

    describe('Hero', function () {
      it('The home page hero text and animation displays', () => {
        cy.get('[data-cy=title]').should('exist').and('contain', 'Mobile Solutions');
        cy.get('[data-cy=subtitle]').should('exist').and('contain', 'For A Digital World');
        cy.get('[data-cy=subpar]').should('exist').and('contain', 'As experts in user experience, design, and application development, we specialize in creating mobile first, user-centered solutions to bring your ideas to life on the small screen.');
        cy.get('.svg-header-desktop').should('exist').and('be.visible');
      });
    });

    describe('App Displays', function () {
      it('Mobile Measure app displays', function () {
        cy.get('.mobilemeasures').scrollIntoView();
        cy.get('.mobilemeasures > .content-panel-image > h2 > .hydrated').should('exist').and('contain', 'Mobile Measures');
        cy.get('.mobilemeasures > .content-panel-image > .row > .behind-left > .hydrated > img')
          .should('exist').and('be.visible');
        cy.get('.mobilemeasures > .content-panel-image > .row > .front-center > .hydrated > img')
          .should('exist').and('be.visible');
        cy.get('.mobilemeasures > .content-panel-image > .row > .behind-right > .hydrated > img')
          .should('exist').and('be.visible');
        // Apple
        cy.get('[data-cy=mobilemeasures-apple]')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href')
          .and('contain', 'apps.apple.com')
          .and('contain', 'mobile-measures');

        // Google
        cy.get('[data-cy=mobilemeasures-google]')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'mobilemeasures');

        cy.get('.mobilemeasures')
          .should('have.css', 'background-image')
          .and('contain', 'mobilemeasures');
      });

      it('LoudCloud app displays', function () {
        cy.get('.loudcloud').scrollIntoView();
        cy.get('.loudcloud > .content-panel-image > h2 > .hydrated').should('exist').and('contain', 'LoudCloud');
        cy.get('.loudcloud > .content-panel-image > .row > .behind-left > .hydrated > img')
          .should('exist').and('be.visible');
        cy.get('.loudcloud > .content-panel-image > .row > .front-center > .hydrated > img')
          .should('exist').and('be.visible');
        cy.get('.loudcloud > .content-panel-image > .row > .behind-right > .hydrated > img')
          .should('exist').and('be.visible');

        cy.get('[data-cy=loudcloud-apple]')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href')
          .and('contain', 'itunes.apple.com')
          .and('contain', 'loudcloud');

        cy.get('[data-cy=loudcloud-google]')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'loudcloud');

        cy.get('.loudcloud')
          .should('have.css', 'background-image')
          .and('contain', 'loudcloud');
      });

      it('The Voyage app displays', function () {
        cy.get('.voyage').scrollIntoView();

        cy.get('.voyage > .content-panel-image > h2 > .hydrated').should('exist').and('contain', 'The Voyage by New Ocean');

        cy.get('.voyage > .content-panel-image > .row > .behind-left > .hydrated > img')
          .should('exist').and('be.visible');

        cy.get('.voyage > .content-panel-image > .row > .front-center > .hydrated > img')
          .should('exist').and('be.visible');

        cy.get('.voyage > .content-panel-image > .row > .behind-right > .hydrated > img')
          .should('exist').and('be.visible');

        cy.get('[data-cy=voyage-apple]')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href')
          .and('contain', 'itunes.apple.com')
          .and('contain', 'the-voyage');

        cy.get('[data-cy=voyage-google]')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'carecaminnovations');

        cy.get('.voyage')
          .should('have.css', 'background-image')
          .and('contain', 'voyage');

      });

      it('The Experts in scroll functionality displays all three text sections', () => {
        cy.get('.mobilemeasures').scrollIntoView();
        cy.get('#content-panel-inner > .panel-inner-text > h2').should('exist')
          .and('contain', 'Mobile & Web Applications');
        cy.get('#content-panel-inner > .panel-inner-text > p').should('exist').and('contain', 'We specialize in mobile application design, development, and App Store Optimization (ASO). Our team has been the top trusted partner of Ionic Framework since 2014 with experience in technologies such as Angular, React, Vue.js, Strapi, and VoIP.');

        cy.get('.loudcloud').scrollIntoView();
        cy.get('#content-panel-inner > .panel-inner-text > h2').should('exist')
          .and('contain', 'Mobile Technology');
        cy.get('#content-panel-inner > .panel-inner-text > p').should('exist').and('contain', 'With our combined expertise in design and marketing, you can rely on us to develop comprehensive strategies and graphics that will define your brand and inspire trust in your target audience.');

        cy.get('.voyage').scrollIntoView();
        cy.get('#content-panel-inner > .panel-inner-text > h2').should('exist')
          .and('contain', 'Design & User Experience');
        cy.get('#content-panel-inner > .panel-inner-text > p').should('exist').and('contain', 'By combining the psychology of design with the capabilities of the digital age, we are able to develop solutions that think outside the box. We go beyond the norms of basic menus and navigation layouts and truly immerse your users in a beautiful and intuitive interface that keeps them coming back for more.');
      });

      it('All of the experts in text displays at the same time', () => {
        cy.viewport('ipad-2');
        cy.get('.mobilemeasures > .content-panel-inner > .panel-inner-text > h2').should('exist')
          .and('contain', 'Mobile & Web Applications');
        cy.get('.mobilemeasures > .content-panel-inner > .panel-inner-text > p').should('exist').and('contain', 'We specialize in mobile application design, development, and App Store Optimization (ASO). Our team has been the top trusted partner of Ionic Framework since 2014 with experience in technologies such as Angular, React, Vue.js, Strapi, and VoIP.');

        cy.get('.loudcloud > .content-panel-inner > .panel-inner-text > h2').should('exist')
          .and('contain', 'Mobile Technology');
        cy.get('.loudcloud > .content-panel-inner > .panel-inner-text > p').should('exist').and('contain', 'With our combined expertise in design and marketing, you can rely on us to develop comprehensive strategies and graphics that will define your brand and inspire trust in your target audience.');

        cy.get('.voyage > .content-panel-inner > .panel-inner-text > h2').should('exist')
          .and('contain', 'Design & User Experience');
        cy.get('.voyage > .content-panel-inner > .panel-inner-text > p').should('exist').and('contain', 'By combining the psychology of design with the capabilities of the digital age, we are able to develop solutions that think outside the box. We go beyond the norms of basic menus and navigation layouts and truly immerse your users in a beautiful and intuitive interface that keeps them coming back for more.');
      });

    });

    describe('Blog section', () => {
      it('Should display "Whats new in Our Blog" title', () => {
        cy.get('.blog-featured').scrollIntoView();
        cy.get('.d-none > h4').should('exist')
          .and('be.visible').and('contain', "What's New in Our Blog");
      });
    });

    describe('Process Section', function () {
      it('Should scroll to the process section', function () {
        cy.get('#process').scrollIntoView();
      });

      it('The "Our Process" carousel title should display', () => {
        cy.get('.header > h2 > .hydrated')
          .contains('Our Process');
      });

      it('The "Our Process" Carousel automatically rotates through all 5 slides and then started over', function () {
        cy.get('.carousel-main-indicators > .carousel-indicators > [data-slide-to="0"]').click();
        cy.get('[data-cy=capp-head] > .hydrated').contains('Discovery');
        // Wait for carousel list el to change on the page
        cy.wait(5000);
        cy.wait(5000);
        cy.wait(5000);
        cy.wait(5000);
        cy.wait(5000);
        cy.get('[data-cy=capp-head] > .hydrated').contains('Discovery');
      });

      it('The carousel displays the correct image and content on all five slides', function () {
        cy.get('[data-cy=capp-img]').each(($el, index) => {
          switch (index) {
            case 0:
              cy.wrap($el).should('have.prop', 'src').and('contain', 'discovery');
              break;

            case 1:
              cy.wrap($el).should('have.prop', 'src').and('contain', 'design');
              break;

            case 2:
              cy.wrap($el).should('have.prop', 'src').and('contain', 'development');
              break;

            case 3:
              cy.wrap($el).should('have.prop', 'src').and('contain', 'deploy');
              break;

            case 4:
              cy.wrap($el).should('have.prop', 'src').and('contain', 'userfeedback');
              break;
          }
        });
      });
    });
    describe('App-Cta', function () {
      it('Should exist', function () {
        cy.get('app-cta').should('exist');
      });
      it('Should navigate to the contact page', function () {
        cy.get('app-cta').within(() => {
          cy.get('stencil-route-link')
            .should('exist')
            .should('have.prop', 'url')
            .and('contain', '/contact');
        });
      });
    });
    describe('Footer', function () {
      beforeEach(() => {
        cy.get('app-footer').as('footer');
      });
      it('Should exist and be visible', function () {
        cy.get('@footer').scrollIntoView();
        cy.get('@footer').should('exist');
      });
    });
  });
});
