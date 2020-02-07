describe('App Our Work', function () {
  var env = 'http://localhost:3333';
  beforeEach(() => {
    cy.visit(env + '/our-work');
  });

  describe('Our Work Header', function () {
    it('The Our work title and paragraph text displays', () => {
      cy.get('.container > h1').contains('Our Work');
      cy.get('.container > p').contains("Each day we work to make our world better by design. Below you will find examples of projects that we've had the pleasure of working on.");
    });

    it('The our work hero image displays', function () {
      cy.get('header > section')
        .should('have.css', 'background').and('contain', 'our-work-header');
    });
  });
  describe('Our work cards', function () {
    it('Should be able to visit the project page', () => {
      cy.get(':nth-child(3) > .card-container > .card-content > stencil-route-link.hydrated > a > button').click();
    });

    describe('Mobile Measures Card', () => {

      it('The Mobile Measures card displays', () => {
        cy.get('.our-work > :nth-child(2)').scrollIntoView();
        cy.get(':nth-child(2) > .card-container > .card-content > h2').contains('Mobile Measures');
        cy.get(':nth-child(2) > .card-container > .card-content > p').contains("A Physical Therapist's brainchild");
        cy.get('[data-cy=mobilembutton]').should('exist').and('be.visible');
        cy.get('[data-cy=mobile-measurebl]').should('exist').and('be.visible');
        cy.get('[data-cy=mobile-measurefc]').should('exist').and('be.visible');
        cy.get('[data-cy=mobile-measurebr]').should('exist').and('be.visible');
        cy.get('[data-cy=mobilemeasures-apple]').should('exist').and('be.visible');
        cy.get('.mobilemeasures')
          .should('have.css', 'background-image')
          .and('contain', 'mobilemeasures');
      });

      it('The Mobile Measures App / Play store button navigate users to the listings', () => {
        cy.get('.mobilemeasures').scrollIntoView();
        cy.get('[data-cy=mobilemeasures-apple]').should('have.attr', 'target', '_blank');
        cy.get('[data-cy=mobilemeasures-google]').should('have.attr', 'target', '_blank');
      });

    });

    describe('LoudCloud Card', () => {
      it('The LoudCloud Card shows', () => {
        cy.get('.our-work > :nth-child(3)').scrollIntoView();
        cy.get(':nth-child(3) > .card-container > .card-content > h2').contains('LoudCloud');
        cy.get(':nth-child(3) > .card-container > .card-content > p').contains("This app was designed with privacy in mind.");
        cy.get('[data-cy=loudcloudbutton]').should('exist').and('be.visible');
        cy.get('[data-cy=loudcloudbl]').should('exist').and('be.visible');
        cy.get('[data-cy=loudcloudfc]').should('exist').and('be.visible');
        cy.get('[data-cy=loudcloudbr]').should('exist').and('be.visible');
        cy.get('[data-cy=loudcloud-apple]').should('exist').and('be.visible');
        cy.get('.loudcloud')
          .should('have.css', 'background-image')
          .and('contain', 'loudcloud');
      });

      it('The LoudCloud App / Play store button navigate users to the listings', () => {
        cy.get('.loudcloud').scrollIntoView();
        cy.get('[data-cy=loudcloud-apple]').should('have.attr', 'target', '_blank');
        cy.get('[data-cy=loudcloud-google]').should('have.attr', 'target', '_blank');
      });

    });

    describe('The Voyage Card', () => {

      it('The Voyage Card shows', () => {
        cy.get('.our-work > :nth-child(3)').scrollIntoView();
        cy.get(':nth-child(4) > .card-container > .card-content > h2').contains('The Voyage');
        cy.get(':nth-child(4) > .card-container > .card-content > p').contains("Employers can now incentivize their employees to develop and commit to healthy habits thanks");
        cy.get('[data-cy=voyagebutton]').should('exist').and('be.visible');
        cy.get('[data-cy=the-voyagebl]').should('exist').and('be.visible');
        cy.get('[data-cy=the-voyagefc]').should('exist').and('be.visible');
        cy.get('[data-cy=the-voyagebr]').should('exist').and('be.visible');
        cy.get('[data-cy=voyage-apple]').should('exist').and('be.visible');
        cy.get('.voyage')
          .should('have.css', 'background-image')
          .and('contain', 'voyage');
      });

      it('The Voyage App / Play store button navigate users to the listings', () => {
        cy.get('.voyage').scrollIntoView();
        cy.get('[data-cy=voyage-apple]').should('have.attr', 'target', '_blank');
        cy.get('[data-cy=voyage-google]').should('have.attr', 'target', '_blank');
      });

    });

    describe('Worked With', () => {
      it('Worked with section should exist', () => {
        cy.get('#worked-with').should('exist');
        cy.get('#worked-with').scrollIntoView();
      });

      it('Worked with title displays', () => {
        cy.get('.col-12 > h2').contains("Who We've Worked With");
      });

      describe('Partners Logos', () => {
        it('ic3401 logo should exist', () => {
          cy.get('[data-cy=ic-3401-logo]')
            .should('exist');
        });

        it('omnifan logo should exist', () => {
          cy.get('[data-cy=omnifan-logo]')
            .should('exist');
        });

        it('Mobile Measures logo should exist', () => {
          cy.get('[data-cy=mobile-measures-logo]')
            .should('exist');
        });

        it('Kemin logo should exist', () => {
          cy.get('[data-cy=kemin-logo]')
            .should('exist');
        });

        it('Ocean Health logo should exist', () => {
          cy.get('[data-cy=ocean-health-logo]')
            .should('exist');
        });

        it('GoMerchan logo should exist', () => {
          cy.get('[data-cy=gomerchang-logo]')
            .should('exist');
        });

        it('Ngatl logo should exist', () => {
          cy.get('[data-cy=ngatl-logo]')
            .should('exist');
        });

        it('LoudCloud logo should exist', () => {
          cy.get('[data-cy=loud-cloud-logo]')
            .should('exist');
        });
      });
    });

    describe('Our Work Sections', () => {
      describe('Projects Mobile Measures', () => {
        beforeEach(() => {
          cy.visit(env + '/our-work/mobilemeasures');
        });
        it('The mobile measures hero image, Text, and logo displays', () => {
          cy.get('.header-content > h1').contains('Mobile Measures');
          cy.get('.header-content > p').contains('A One-Stop-Shop for Physical Therapy outcome measures');
          cy.get('.logo').should('exist').and('be.visible');
          cy.get('.d-none').should('exist').and('be.visible');
        });

        it('The Mobile Measures Get back in motion section displays', () => {
          cy.get('[data-cy=title]').should('exist');
          cy.get('[data-cy=subtitle]').should('exist');
          cy.get('.col-md-8 > .project-content-icons > :nth-child(1) > .hydrated > img').should('exist');
          cy.get('.col-md-8 > .project-content-icons > :nth-child(2) > .hydrated > img').should('exist');
          cy.get('.col-md-8 > .project-content-icons > :nth-child(3) > .hydrated > img').should('exist');
          cy.get('[data-cy=apple-button]').should('exist');
          cy.get('[data-cy=google-button]').should('exist');
          cy.get('.col-md-4 > :nth-child(2) > .hydrated > img').should('exist');
          cy.get('.col-md-4 > :nth-child(1) > .hydrated > img').should('exist');
        });

        it('The Mobile Measures App / Play store button navigate users to the listings', () => {
          cy.get('[data-cy=apple-button]').should('have.attr', 'target', '_blank');
          cy.get('[data-cy=google-button]').should('have.attr', 'target', '_blank');
        });

        it('The three Mobile Measure phones display', () => {
          cy.get('.key-features').scrollIntoView();
          cy.get('[data-cy=image1k]').should('exist').and('be.visible');
          cy.get('[data-cy=image2k]').should('exist').and('be.visible');
          cy.get('[data-cy=image3k]').should('exist').and('be.visible');
        });

        it('Mobile Measures Key features display', () => {
          cy.get('.key-features-text').scrollIntoView();
          cy.get('.key-features-text > .container > h2').contains('Key Features');
          cy.get('.key-features-text > .container > p').contains('Mobile Measures is HIPPA-compliant and provides Physical Therapists with an accurate representation of their');
          cy.get('.key-features-text').should('have.css', 'background-color').and('contains', 'rgb(41, 42, 45)');
        });

        it('"More Projects" displays with the divider', () => {
          cy.get('.more-projects').scrollIntoView();
          cy.get('[data-cy=more-title]').contains('More Projects');
          cy.get('.aside-lines').should('exist').and('be.visible');
        });

        it('Check that the LoudCloud app displays', () => {
          cy.get('.more-projects').scrollIntoView();
          cy.get('[src="/assets/our-work/lc-feature-image2.png"]').should('exist');
          cy.get('[src="/assets/our-work/lc-feature-image1.png"]').should('exist');
          cy.get('[data-cy=apple-button]').should('exist');
          cy.get('[data-cy=google-button]').should('exist');
          cy.get('.more-projects-items > :nth-child(1) > .d-none').should('exist');
          cy.get('.other-button').should('exist');
        });

        it('Check that the LoudCloud "View project" button works', () => {
          cy.get('.more-projects').scrollIntoView();
          cy.get(':nth-child(1) > .other-button > stencil-route-link.hydrated > a > button').click();
          cy.get('.header-content > h1').contains('LoudCloud');

        });

        it('Check that the LoudCloud App/Play store links work', () => {
          cy.get('[data-cy=apple-button]').should('have.attr', 'target', '_blank');
          cy.get('[data-cy=google-button]').should('have.attr', 'target', '_blank');
        });

        it('Check that the Voyage app displays', () => {
          cy.get('.more-projects').scrollIntoView();
          cy.get('[src="/assets/our-work/voyage-feature-image1.png"]').should('exist');
          cy.get('[src="/assets/our-work/voyage-content-image1.png"]').should('exist');
          cy.get('[data-cy=apple-button]').should('exist');
          cy.get('[data-cy=google-button]').should('exist');
          cy.get('.more-projects-items > :nth-child(2) > .d-none').should('exist');
          cy.get('.other-button').should('exist');
        });

        it('Check that the Voyage App/Play store links work', () => {
          cy.get('[data-cy=apple-button]').should('have.attr', 'target', '_blank');
          cy.get('[data-cy=google-button]').should('have.attr', 'target', '_blank');
        });

        it('Check that the Voyage "View project" button works', () => {
          cy.get('.more-projects').scrollIntoView();
          cy.get(':nth-child(2) > .other-button > stencil-route-link.hydrated > a > button').click();
          cy.get('.header-content > h1').contains('The Voyage');

        });

        it('Check that the Mobile Measures app displays', () => {
          cy.visit(env + '/our-work/loudcloud');
          cy.get('.more-projects').scrollIntoView();
          cy.get('[src="/assets/our-work/mm-feature-image3.png"]').should('exist');
          cy.get('[src="/assets/our-work/mm-feature-image1.png"]').should('exist');
          cy.get('[data-cy=apple-button]').should('exist');
          cy.get('[data-cy=google-button]').should('exist');
          cy.get('.more-projects-items > :nth-child(1) > .d-none').should('exist');
          cy.get('.other-button').should('exist');
        });

        it('Check that the Voyage App/Play store links work', () => {
          cy.visit(env + '/our-work/loudcloud');
          cy.get('[data-cy=apple-button]').should('have.attr', 'target', '_blank');
          cy.get('[data-cy=google-button]').should('have.attr', 'target', '_blank');
        });

        it('Check that the Mobile Measures "View project" button works', () => {
          cy.visit(env + '/our-work/loudcloud');
          cy.get('.more-projects').scrollIntoView();
          cy.get(':nth-child(1) > .other-button > stencil-route-link.hydrated > a > button').click();
          cy.get('.header-content > h1').contains('Mobile Measures');
        });

        it('The footer is visible on the Mobile Measures page', () => {
          cy.visit(env + '/our-work/mobilemeasures');
          cy.get('.footer').scrollIntoView();
          cy.get('.footer').should('be.visible');
        });

      });

      describe('Projects Loud Cloud', () => {
        beforeEach(() => {
          cy.visit(env + '/our-work/loudcloud');
        });

        it('The loudcloud hero image, Text, and logo displays', () => {
          cy.get('.header-content > h1').contains('LoudCloud');
          cy.get('.header-content > p').contains('Disposable World-Wide Phone Numbers');
          cy.get('.logo').should('exist').and('be.visible');
          cy.get('.d-none').should('exist').and('be.visible');
        });

        it('The LoudCloud Privacy on Demand section displays', () => {
          cy.get('[data-cy=title]').should('exist');
          cy.get('[data-cy=subtitle]').should('exist');
          cy.get('.col-md-8 > .project-content-icons > :nth-child(1) > .hydrated > img').should('exist');
          cy.get('.col-md-8 > .project-content-icons > :nth-child(2) > .hydrated > img').should('exist');
          cy.get('.col-md-8 > .project-content-icons > :nth-child(3) > .hydrated > img').should('exist');
          cy.get('[data-cy=apple-button]').should('exist');
          cy.get('[data-cy=google-button]').should('exist');
          cy.get('.col-md-4 > :nth-child(2) > .hydrated > img').should('exist');
          cy.get('.col-md-4 > :nth-child(1) > .hydrated > img').should('exist');
        });

        it('The LoudCloud App / Play store button navigate users to the listings', () => {
          cy.get('[data-cy=apple-button]').should('have.attr', 'target', '_blank');
          cy.get('[data-cy=google-button]').should('have.attr', 'target', '_blank');
        });

        it('The three LoudCloud phones display', () => {
          cy.get('.key-features').scrollIntoView();
          cy.get('[data-cy=image1k]').should('exist').and('be.visible');
          cy.get('[data-cy=image2k]').should('exist').and('be.visible');
          cy.get('[data-cy=image3k]').should('exist').and('be.visible');
        });

        it('LoudCloud Key features display', () => {
          cy.get('.key-features-text').scrollIntoView();
          cy.get('.key-features-text > .container > h2').contains('Key Features');
          cy.get('.key-features-text > .container > p').contains('One of the advantages LoudCloud has over its competitors');
          cy.get('.key-features-text').should('have.css', 'background-color').and('contains', 'rgb(41, 42, 45)');
        });

        it('"More Projects" displays with the divider', () => {
          cy.get('.more-projects').scrollIntoView();
          cy.get('[data-cy=more-title]').contains('More Projects');
          cy.get('.aside-lines').should('exist').and('be.visible');
        });

        it('Check that the Voyage "View project" button works', () => {
          cy.get('.more-projects').scrollIntoView();
          cy.get(':nth-child(2) > .other-button > stencil-route-link.hydrated > a > button').click();
          cy.get('.header-content > h1').contains('The Voyage');
        });

        it('Check that the Voyage App/Play store links work', () => {
          cy.get('[data-cy=apple-button]').should('have.attr', 'target', '_blank');
          cy.get('[data-cy=google-button]').should('have.attr', 'target', '_blank');
        });

        it('Check that the Mobile Measures app displays', () => {
          cy.get('.more-projects').scrollIntoView();
          cy.get('[src="/assets/our-work/mm-feature-image3.png"]').should('exist');
          cy.get('[src="/assets/our-work/mm-feature-image1.png"]').should('exist');
          cy.get('[data-cy=apple-button]').should('exist');
          cy.get('[data-cy=google-button]').should('exist');
          cy.get('.more-projects-items > :nth-child(1) > .d-none').should('exist');
          cy.get('.other-button').should('exist');
        });

        it('Check that the Mobile Measures App/Play store links work', () => {
          cy.get('[data-cy=apple-button]').should('have.attr', 'target', '_blank');
          cy.get('[data-cy=google-button]').should('have.attr', 'target', '_blank');
        });

        it('Check that the Mobile Measures "View project" button works', () => {
          cy.get('.more-projects').scrollIntoView();
          cy.get(':nth-child(1) > .other-button > stencil-route-link.hydrated > a > button').click();
          cy.get('.header-content > h1').contains('Mobile Measures');

          it('The footer is visible on the LoudCloud page', () => {
            cy.visit(env + '/our-work/loudcloud');
            cy.get('.footer').scrollIntoView();
            cy.get('.footer').should('be.visible');
          });

        });
      });
    });
    describe('App-Cta', function () {
      it('Should exist and display title', function () {
        cy.get('app-cta').should('exist');
        cy.get('.align-self-center > h2').contains('Got a vision?');
        cy.get('.align-self-center > p').contains("We've got your back.");
        cy.get('.button > .hydrated').should('exist').and('be.visible');
        cy.get('.cta-image').should('exist').and('be.visible');
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
