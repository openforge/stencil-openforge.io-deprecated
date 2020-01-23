describe('App Our Work', function () {
  var env = 'http://localhost:3333';
  beforeEach(() => {
    cy.visit(env + '/our-work')
  })

  describe('Our Work Header', function () {
    it('The header must have an image', function () {
      cy.get('header > section')
        .should('have.css', 'background')
    })
    it('The header must show the correct image', function () {
      cy.get('header > section')
        .should('have.css', 'background').and('contain', 'our-work-header')
    })

    const mdSizes = ['ipad-2', 'ipad-mini'];
    const smSizes = ['iphone-xr', 'iphone-x', 'iphone-6+', 'iphone-6', 'iphone-5', 'iphone-4'];
    describe('Medium viewport', function () {
      mdSizes.forEach((size) => {
        it(`should display background on ${size}`, () => {
          cy.viewport(size)
          cy.get('header')
            .should('have.css', 'background').and('contain', 'our-work-header')
        })
      })
    })
    describe('Small viewport', function () {
      smSizes.forEach((size) => {
        it(`should not display background on ${size}`, () => {
          cy.viewport(size)
          cy.get('header')
            .should('have.css', 'background').and('contain', 'none')
        })
      })
    })
  });
  describe('Our work cards', function () {
    describe('Mobile Measures Card', () => {
      it('Card images should exist', () => {
        cy.viewport('macbook-15')
        cy.get('[data-cy=mobile-measurebl]').should('exist')
        cy.get('[data-cy=mobile-measurefc]').should('exist')
        cy.get('[data-cy=mobile-measurebr]').should('exist')
      })
      it('Card images should be the correct one', () => {

        cy.get('[data-cy=mobile-measurebl]').should('have.prop', 'src').and('contain', 'mobilemeasures')
        cy.get('[data-cy=mobile-measurefc]').should('have.prop', 'src').and('contain', 'mobilemeasures')
        cy.get('[data-cy=mobile-measurebr]').should('have.prop', 'src').and('contain', 'mobilemeasures')
      })
      it('Should have a tags for Mobile Measures project that navigate to the Apple Store and Google Play Store', function () {
        cy.get('[data-cy=mobilemeasures-apple]')
          .should('have.attr', 'href')
          .and('contain', 'apps.apple.com')
          .and('contain', 'mobile-measures')

        cy.get('[data-cy=mobilemeasures-google]')
          .should('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'mobilemeasures')
      })
    })
    describe('LoudCloud Card', () => {
      it('Card images should exist', () => {
        cy.viewport('macbook-15')
        cy.get('[data-cy=loudcloudbl]').should('exist')
        cy.get('[data-cy=loudcloudfc]').should('exist')
        cy.get('[data-cy=loudcloudbr]').should('exist')
      })
      it('Card images should be the correct one', () => {

        cy.get('[data-cy=loudcloudbl]').should('have.prop', 'src').and('contain', 'loudcloud')
        cy.get('[data-cy=loudcloudfc]').should('have.prop', 'src').and('contain', 'loudcloud')
        cy.get('[data-cy=loudcloudbr]').should('have.prop', 'src').and('contain', 'loudcloud')
      })
      it('Should have a tags for Mobile Measures project that navigate to the Apple Store and Google Play Store', function () {
        cy.get('[data-cy=loudcloud-apple]')
          .should('have.attr', 'href')
          .and('contain', 'itunes.apple.com')
          .and('contain', 'loudcloud')

        cy.get('[data-cy=loudcloud-google]')
          .should('have.attr', 'href')
          .and('contain', 'play.google.com')
          .and('contain', 'loudcloud')
      })
    })
  })
})
