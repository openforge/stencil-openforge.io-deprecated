describe('App Partners', function () {
    var env = 'http://localhost:3333'
    beforeEach(() => {
        cy.visit(env + '/partners')
    })

    describe('Partners Header', () => {
        it('Partners header image should exist', () => {
            cy.get('[data-cy=head-image]').should('exist')
        })

        it('Partners header image should be correct', () => {
            cy.get('[data-cy=head-image]')
                .should('have.prop', 'src')
                .and('contain', 'partners-graphic-header')
        })
    })

    describe('Partners Slider', () => {
        it('Should scroll to the trusted partners section', function () {
            cy.get('#trusted-partners').scrollIntoView()
        })
        it('Should have carousel components and active class prop to change', function () {
            cy.get('.carousel-indicators > li').should('exist')
                .and('have.class', 'active')
        })
        it('Active class should show on one carousel list element at a time', function () {
            cy.get('.carousel-indicators').within(() => {

                cy.get('li').first().should('have.class', 'active');
                // Wait for carousel list el to change on the page
                cy.wait(2000)
                cy.get('li:first').next().should('have.class', 'active');
                cy.get('li').first().should('not.have.class', 'active');
            })
        })
        it('Process images should show in correct order', function () {
            cy.get('[data-cy=capp-img]').each(($el, index) => {
                switch (index) {
                    case 0:
                        cy.wrap($el).should('have.prop', 'src').and('contain', 'ionic')
                        break;

                    case 1:
                        cy.wrap($el).should('have.prop', 'src').and('contain', '1776')
                        break;

                    case 2:
                        cy.wrap($el).should('have.prop', 'src').and('contain', 'strapi')
                        break;

                    case 3:
                        cy.wrap($el).should('have.prop', 'src').and('contain', '215')
                        break;

                    case 4:
                        cy.wrap($el).should('have.prop', 'src').and('contain', 'financial-gps')
                        break;

                    case 5:
                        cy.wrap($el).should('have.prop', 'src').and('contain', 'drexel-logo')
                        break;
                }
            })
        })
    })

    describe('Interested in partnering with us section', () => {
        it('Image should exist', () => {
            cy.get('.cta-image').should('exist')
        })
        it('The cta image must be correct', function () {
            cy.get('.cta-image')
                .should('have.css', 'background').and('contain', 'partners-graphic-cta')
        })
        it('Get in touch button should be clickable', () => {
            cy.get('[data-cy=cta-button]').click({ force: true })
        })
    })


})