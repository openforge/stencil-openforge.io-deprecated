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

        describe('navigation tabs', () => {
            it('Should navigate to home when logo is clicked', () => {
                cy.visit('localhost:3333/about');
                cy.get('.navbar-brand').click();
                cy.get('.hero').should('exist').and('be.visible');
            })
        })

    })
})