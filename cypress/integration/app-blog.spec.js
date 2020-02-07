describe('Blog Page', function() {
  describe('User is able to navigate to our twitter page via the twitter icon under "Follow Us"', () => {
    it('Check that the twitter opens', function() {
      cy.visit('localhost:3333/blog', {
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

  describe('User is able to navigate to our linkedin page via the linkedin icon under "Follow Us"', () => {
    it('Check that the linkedin opens', function() {
      cy.visit('localhost:3333/blog', {
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

  describe('User is able to navigate to our facebook page via the facebook icon under "Follow Us"', () => {
    it('Check that the facebook opens', function() {
      cy.visit('localhost:3333/blog', {
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

  describe('The feature blog post only displays in the all tab', () => {
    it('Check the all tab', () => {
      cy.visit('localhost:3333/blog');
      cy.get('[data-cy=all]')
        .should('exist')
        .should('have.class', 'active');
      cy.get('app-blog-featured')
        .contains("What's New In Our Blog")
        .should('exist')
        .and('be.visible');
      cy.get('[data-cy=announcements]')
        .click();
      cy.get('app-blog-featured')
        .contains("What's New In Our Blog")
        .should('not.exist');
      cy.get('[data-cy=development]')
        .click();
      cy.get('app-blog-featured')
        .contains("What's New In Our Blog")
        .should('not.exist');
      cy.get('[data-cy=design]')
        .click();
      cy.get('app-blog-featured')
        .contains("What's New In Our Blog")
        .should('not.exist');
      cy.get('[data-cy=business]')
        .click();
      cy.get('app-blog-featured')
        .contains("What's New In Our Blog")
        .should('not.exist');
    });
  });

  describe('The footer is visible on the "Blog" page', () => {
    it('Check the footer exists', () => {
      cy.visit('localhost:3333/blog');
      cy.get('footer')
        .should('exist')
        .and('be.visible');
    });
  });
});
