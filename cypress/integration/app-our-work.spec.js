describe('App Our Work', function () {
  var env = 'http://localhost:3333';
  beforeEach(() => {
    cy.visit(env + '/our-work');
  });

  describe('Our Work Header', function () {
    it('The header must have an image', function () {
      cy.get('header > section')
        .should('have.css', 'background');
    });
    it('The header must show the correct image', function () {
      cy.get('header > section')
        .should('have.css', 'background').and('contain', 'our-work-header');
    });

    const mdSizes = ['ipad-2', 'ipad-mini'];
    const smSizes = ['iphone-xr', 'iphone-x', 'iphone-6+', 'iphone-6', 'iphone-5', 'iphone-4'];
    describe('Medium viewport', function () {
      mdSizes.forEach((size) => {
        it(`should display background on ${size}`, () => {
          cy.viewport(size);
          cy.get('header')
            .should('have.css', 'background').and('contain', 'our-work-header');
        });
      });
    });
    describe('Small viewport', function () {
      smSizes.forEach((size) => {
        it(`should not display background on ${size}`, () => {
          cy.viewport(size);
          cy.get('header')
            .should('have.css', 'background').and('contain', 'none');
        });
      });
    });
  });
  describe('Our work cards', function () {
    it('Should be able to visit the project page', () => {
      cy.get(':nth-child(3) > .card-container > .card-content > stencil-route-link.hydrated > a > button').click();
      cy.wait(1000);
    });

    describe('Mobile Measures Card', () => {
      it('Card images should exist', () => {
        cy.viewport('macbook-15');
        cy.get('[data-cy=mobile-measurebl]').should('exist');
        cy.get('[data-cy=mobile-measurefc]').should('exist');
        cy.get('[data-cy=mobile-measurebr]').should('exist');
      });
      it('Card images should be the correct one', () => {

        cy.get('[data-cy=mobile-measurebl]').should('have.prop', 'src').and('contain', 'mobilemeasures');
        cy.get('[data-cy=mobile-measurefc]').should('have.prop', 'src').and('contain', 'mobilemeasures');
        cy.get('[data-cy=mobile-measurebr]').should('have.prop', 'src').and('contain', 'mobilemeasures');
      });
      it('Should have a tags for Mobile Measures project that navigate to the Apple Store and Google Play Store', function () {
        cy.get('[data-cy=mobilemeasures-apple]')
          .should('have.attr', 'href')
          .and('contain', 'apps.apple.com')
          .and('contain', 'mobile-measures');

        cy.get('[data-cy=mobilemeasures-google]')
          .should('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'mobilemeasures');
      });
    });

    describe('LoudCloud Card', () => {
      it('Card images should exist', () => {
        cy.viewport('macbook-15');
        cy.get('[data-cy=loudcloudbl]').should('exist');
        cy.get('[data-cy=loudcloudfc]').should('exist');
        cy.get('[data-cy=loudcloudbr]').should('exist');
      });
      it('Card images should be the correct one', () => {

        cy.get('[data-cy=loudcloudbl]').should('have.prop', 'src').and('contain', 'loudcloud');
        cy.get('[data-cy=loudcloudfc]').should('have.prop', 'src').and('contain', 'loudcloud');
        cy.get('[data-cy=loudcloudbr]').should('have.prop', 'src').and('contain', 'loudcloud');
      });
      it('Should have a tags for LoudCloud project that navigate to the Apple Store and Google Play Store', function () {
        cy.get('[data-cy=loudcloud-apple]')
          .should('have.attr', 'href')
          .and('contain', 'itunes.apple.com')
          .and('contain', 'loudcloud');

        cy.get('[data-cy=loudcloud-google]')
          .should('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'loudcloud');
      });
    });

    describe('The Voyage Card', () => {
      it('Card images should exist', () => {
        cy.viewport('macbook-15');
        cy.get('[data-cy=the-voyagebl]').should('exist');
        cy.get('[data-cy=the-voyagefc]').should('exist');
        cy.get('[data-cy=the-voyagebr]').should('exist');
      });
      it('Card images should be the correct one', () => {

        cy.get('[data-cy=the-voyagebl]').should('have.prop', 'src').and('contain', 'voyage');
        cy.get('[data-cy=the-voyagefc]').should('have.prop', 'src').and('contain', 'voyage');
        cy.get('[data-cy=the-voyagebr]').should('have.prop', 'src').and('contain', 'voyage');
      });
      it('Should have a tags for The Voyage project that navigate to the Apple Store and Google Play Store', function () {
        cy.get('[data-cy=voyage-apple]')
          .should('have.attr', 'href')
          .and('contain', 'itunes.apple.com')
          .and('contain', 'voyage');

        cy.get('[data-cy=voyage-google]')
          .should('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'carecaminnovations');
      });
    });

    describe('Worked With', () => {
      it('Worked with section should exist', () => {
        cy.get('#worked-with').should('exist');
        cy.get('#worked-with').scrollIntoView();
      });

      describe('Partners Logos', () => {
        it('ic3401 logo should exist', () => {
          cy.get('[data-cy=ic-3401-logo]')
            .should('exist');
        });

        it('ic3401 logo should show the correct image', () => {
          cy.get('[data-cy=ic-3401-logo]')
            .should('have.prop', 'src')
            .and('contain', 'ic3401');
        });

        it('omnifan logo should exist', () => {
          cy.get('[data-cy=omnifan-logo]')
            .should('exist');
        });

        it('omnifan logo should show the correct image', () => {
          cy.get('[data-cy=omnifan-logo]')
            .should('have.prop', 'src')
            .and('contain', 'omnifan');
        });

        it('Mobile Measures logo should exist', () => {
          cy.get('[data-cy=mobile-measures-logo]')
            .should('exist');
        });

        it('Mobile Measures logo should show the correct image', () => {
          cy.get('[data-cy=mobile-measures-logo]')
            .should('have.prop', 'src')
            .and('contain', 'mobilemeasures');
        });

        it('Kemin logo should exist', () => {
          cy.get('[data-cy=kemin-logo]')
            .should('exist');
        });

        it('Kemin logo should show the correct image', () => {
          cy.get('[data-cy=kemin-logo]')
            .should('have.prop', 'src')
            .and('contain', 'kemin');
        });

        it('Ocean Health logo should exist', () => {
          cy.get('[data-cy=ocean-health-logo]')
            .should('exist');
        });

        it('Ocean Health logo should show the correct image', () => {
          cy.get('[data-cy=ocean-health-logo]')
            .should('have.prop', 'src')
            .and('contain', 'ocean');
        });

        it('GoMerchan logo should exist', () => {
          cy.get('[data-cy=gomerchang-logo]')
            .should('exist');
        });

        it('GoMerchan logo should show the correct image', () => {
          cy.get('[data-cy=gomerchang-logo]')
            .should('have.prop', 'src')
            .and('contain', 'gomerchant');
        });

        it('Ngatl logo should exist', () => {
          cy.get('[data-cy=ngatl-logo]')
            .should('exist');
        });

        it('Ngatl logo should show the correct image', () => {
          cy.get('[data-cy=ngatl-logo]')
            .should('have.prop', 'src')
            .and('contain', 'ngatl');
        });

        it('LoudCloud logo should exist', () => {
          cy.get('[data-cy=loud-cloud-logo]')
            .should('exist');
        });

        it('LoudCloud logo should show the correct image', () => {
          cy.get('[data-cy=loud-cloud-logo]')
            .should('have.prop', 'src')
            .and('contain', 'loudcloud');
        });
      });
    });
  });
});
