describe('Navbar', function () {
    var env = 'http://localhost:3333';
    beforeEach(() => {
        cy.visit(env)
    })

    describe('Desktop Mode', () => {

        describe('Should display the correct tabs', () => {
            it('Navbar should exist', () => {
                cy.get('nav')
                    .should('exist')
                    .and('be.visible')
            })

            it('Nav bar should show the OpenForge logo', function () {
                cy.get('.navbar-brand')
                    .should('exist')
                    .and('be.visible')
            })

            it('Our Work should exist and be visible in the nav bar', function () {
                cy.get('nav')
                    .contains('Our Work')
                    .should('exist')
                    .and('be.visible')
            })

            it('About should exist and be visible in the nav bar', function () {
                cy.get('nav')
                    .contains('About')
                    .should('exist')
                    .and('be.visible')
            })

            it('Resources should exist and be visible in the nav bar', function () {
                cy.get('nav')
                    .contains('Resources')
                    .should('exist')
                    .and('be.visible')
            })

            it('Work With Us should exist and be visible in the nav bar', function () {
                cy.get('nav')
                    .contains('Work With Us')
                    .should('exist')
                    .and('be.visible')
            })

            it('Should display magnifying glass search', () => {
                cy.get('[data-cy=search-glass]')
                    .should('exist')
                    .and('be.visible')
            })
        })

        describe('Navigation tabs', () => {
            it('Should navigate to home when logo is clicked', () => {
                cy.visit('localhost:3333/about');
                cy.get('.navbar-brand').click();
                cy.get('.hero').should('exist').and('be.visible');
            })

            it('Should navigate to our work page', () => {
                cy.get('[data-cy=our-work]').click();
                cy.get('header').should('exist').and('be.visible');
            })

            it('Should navigate to blogs', () => {
                cy.get('[data-cy=resources]').click();
                cy.get('[data-cy=blog] > .nav-link').click();
                cy.get('#featured-blog-title').should('exist').and('be.visible');
            })

            it('Github button should open another tab', () => {
                cy.get('[data-cy=resources]').click();
                cy.get('#github').should('have.attr', 'href')
                    .and('contain', 'github.com/openforge')
                cy.get('#github').should('have.attr', 'target', '_blank')
            })

            it('Should navigate to meet the team', () => {
                cy.get('[data-cy=about]').click();
                cy.get('[data-cy=meet] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
            })

            it('Should navigate to partners', () => {
                cy.get('[data-cy=about]').click();
                cy.get('[data-cy=partners] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
            })

            it('Should navigate to work with us', () => {
                cy.get('[data-cy=contact]').click();
                cy.get('.contact-form').should('exist').and('be.visible');
            })

            it('Our work tab should be on select state', () => {
                cy.get('[data-cy=our-work]').click();
                cy.get('[data-cy=our-work] > .hydrated > .nav-link').should('have.class', 'active');
            })
        })

    })
})