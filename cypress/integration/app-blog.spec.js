describe('Blog Page', function () {
  describe('User is able to navigate to our twitter page via the twitter icon under "Follow Us"', () => {
    it('Check that the twitter opens', function () {
      cy.visit('localhost:3333/blog', {
        onBeforeLoad(win) {
          cy.stub(win, 'open');
        },
      });
      cy.get('.d-sm-block.d-md-none.d-lg-block #twitter')
        .should('exist')
        .click();
      cy.window()
        .its('open')
        .should('be.called');
    });
  });

  describe('User is able to navigate to our linkedin page via the linkedin icon under "Follow Us"', () => {
    it('Check that the linkedin opens', function () {
      cy.get('#linkedin')
        .should('exist');
    });
  });

  describe('User is able to navigate to our facebook page via the facebook icon under "Follow Us"', () => {
    it('Check that the facebook opens', function () {
      cy.get('#facebook')
        .should('exist');
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
      cy.get('[data-cy=announcements]').click();
      cy.wait(1000);
      cy.get('app-blog-featured').should('not.exist');
      cy.get('[data-cy=development]').click();
      cy.wait(1000);
      cy.get('app-blog-featured').should('not.exist');
      cy.get('[data-cy=design]').click();
      cy.wait(1000);
      cy.get('app-blog-featured').should('not.exist');
      cy.get('[data-cy=business]').click();
      cy.wait(1000);
      cy.get('app-blog-featured').should('not.exist');
    });
  });

  describe('User is able to navigate blog posts via the pagination', () => {
    it('Check pagination', () => {
      cy.visit('localhost:3333/blog');
      cy.get('[data-cy=all]')
        .should('exist')
        .should('have.class', 'active');
      cy.get('ul.blog-page-list .blog-page-item:first-child()')
        .should('exist')
        .should('have.class', 'active');
      cy.get('ul.blog-page-list .blog-page-item:nth-child(2)')
        .should('exist')
        .click();
      cy.get('ul.blog-page-list .blog-page-item:nth-child(2)')
        .should('exist')
        .should('have.class', 'active');
      cy.get('ul.blog-page-list .blog-page-item:nth-child(3)')
        .should('exist')
        .click();
      cy.get('ul.blog-page-list .blog-page-item:nth-child(3)')
        .should('exist')
        .should('have.class', 'active');
    });
  });

  describe('The user is able to navigate to our newsletter signup page from a blog article', () => {
    it('Check newsletter', () => {
      cy.visit('localhost:3333/blog');
      cy.get('.featured-post-title')
        .should('exist')
        .and('be.visible')
        .click();
      cy.get('#mc-embedded-subscribe')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('User is able to navigate back to the main blog page from a specific blog article', () => {
    it('Check back navigation from blog', () => {
      cy.visit('localhost:3333/blog');
      cy.get('.featured-post-title')
        .should('exist')
        .and('be.visible')
        .click();
      cy.wait(1000);
      cy.get('.top-buttons-container .back-link')
        .should('exist')
        .and('be.visible');
      cy.get('.top-buttons-container .back-link:first-child() stencil-route-link').click();
      cy.wait(1000);
      cy.get('app-blog-featured')
        .contains("What's New In Our Blog")
        .should('exist')
        .and('be.visible');
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
