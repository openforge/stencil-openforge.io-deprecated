// / <reference types="Cypress" />

describe('Footer', function () {
  describe('The footer displays the "Our Headquarters" section', () => {
    var env = 'http://localhost:3333';
    beforeEach(() => {
      cy.visit(env);
    });

    it('Check that the title and column texts', function () {
      cy.get('footer')
        .contains('Our Headquarters')
        .should('exist')
        .and('be.visible');
      cy.get('footer')
        .contains('OpenForge')
        .should('exist')
        .and('be.visible');
      cy.get('footer')
        .contains('1608 Walnut Street')
        .should('exist')
        .and('be.visible');
      cy.get('footer')
        .contains('Philadelphia, PA 19103')
        .should('exist')
        .and('be.visible');
      cy.get('footer')
        .contains('(215)-821-8673')
        .should('exist')
        .and('be.visible');
      cy.get('footer')
        .contains('hello@openforge.io')
        .should('exist')
        .and('be.visible');
      cy.get('footer')
        .contains('Read our SLA')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The "Read our SLA" link will navigate the user to the SLA page of the website', () => {
    it('Check that the user is navigated to SLA page', function () {
      cy.get('footer .footer--column:first-child() stencil-route-link').click();
      cy.wait(1000);
      cy.get('header')
        .contains('Service Level Agreement')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The Footer displays the "Work At OpenForge" section', () => {
    it('Check that the title and column texts', function () {
      cy.get('footer')
        .contains('Work At OpenForge')
        .should('exist')
        .and('be.visible');
      cy.get('footer')
        .contains('Are you looking for a new challenge? Show us what you got!')
        .should('exist')
        .and('be.visible');
      cy.get('footer')
        .contains('APPLY NOW')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The "Apply Now" button located in the footer takes the user to the Opportunities page of the website', () => {
    it('Check that the user is navigated to Opportunities page', function () {
      cy.get('footer .footer--column:nth-child(2) a').click();
      cy.wait(1000);
      cy.get('header')
        .contains('Looking for a New Adventure?')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The Footer displays "The Forge" section', () => {
    it('Check that the title and column texts', function () {
      cy.get('footer')
        .contains('The Forge')
        .should('exist')
        .and('be.visible');
      cy.get('footer')
        .contains('We are the proud organizers of the Philadelphia Ionic, Angular, and Startup Junto communities. Join us to learn more!')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The footer displays the legal stamp & version number', () => {
    it('Check that the title and column texts', function () {
      cy.get('footer')
        .contains('© OpenForge 2019 v2.5.1')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The Footer Displays "Follow us" section', () => {
    it('Check that the title and column texts', function () {
      cy.get('footer')
        .contains('Follow us:')
        .should('exist')
        .and('be.visible');
      cy.get('#instagram')
        .should('exist')
        .and('be.visible');
      cy.get('#twitter')
        .should('exist')
        .and('be.visible');
      cy.get('#linkedin')
        .should('exist')
        .and('be.visible');
      cy.get('#facebook')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The Twitter icon located in the footer opens the OpenForge Twitter page in a new tab of the Browser', () => {
    it('Check that the twitter opens', function () {
      cy.visit('http://localhost:3333', {
        onBeforeLoad(win) {
          cy.stub(win, 'open');
        },
      });
      cy.get('#twitter')
        .should('exist')
        .and('be.visible')
        .click();
      cy.window()
        .its('open')
        .should('be.called');
    });
  });

  describe('The Instagram icon located in the footer opens the OpenForge instagram page in a new tab of the Browser', () => {
    it('Check that the instagram opens', function () {
      cy.visit('http://localhost:3333', {
        onBeforeLoad(win) {
          cy.stub(win, 'open');
        },
      });
      cy.get('#instagram')
        .should('exist')
        .and('be.visible')
        .click();
      cy.window()
        .its('open')
        .should('be.called');
    });
  });

  describe('The LinkedIn icon located in the footer opens the OpenForge LinkedIn page in a new tab of the Browser', () => {
    it('Check that the linkedin opens', function () {
      cy.visit('http://localhost:3333', {
        onBeforeLoad(win) {
          cy.stub(win, 'open');
        },
      });
      cy.get('#linkedin')
        .should('exist')
        .and('be.visible')
        .click();
      cy.window()
        .its('open')
        .should('be.called');
    });
  });

  describe('The FaceBook icon located in the footer opens the OpenForge FaceBook page in a new tab of the Browser', () => {
    it('Check that the facebook opens', function () {
      cy.visit('http://localhost:3333', {
        onBeforeLoad(win) {
          cy.stub(win, 'open');
        },
      });
      cy.get('#facebook')
        .should('exist')
        .and('be.visible')
        .click();
      cy.window()
        .its('open')
        .should('be.called');
    });
  });
});
