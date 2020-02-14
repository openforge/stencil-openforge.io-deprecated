describe('Navbar', function () {
    var env = 'http://localhost:3333';
    beforeEach(() => {
        cy.visit(env);
    });

    describe('Desktop Mode', () => {

        describe('Should display the correct tabs', () => {
            it('Navbar should exist', () => {
                cy.get('nav')
                    .should('exist')
                    .and('be.visible');
            });

            it('Nav bar should show the OpenForge logo', function () {
                cy.get('.navbar-brand')
                    .should('exist')
                    .and('be.visible');
            });

            it('Our Work should exist and be visible in the nav bar', function () {
                cy.get('nav')
                    .contains('Our Work')
                    .should('exist')
                    .and('be.visible');
            });

            it('About should exist and be visible in the nav bar', function () {
                cy.get('nav')
                    .contains('About')
                    .should('exist')
                    .and('be.visible');
            });

            it('Resources should exist and be visible in the nav bar', function () {
                cy.get('nav')
                    .contains('Resources')
                    .should('exist')
                    .and('be.visible');
            });

            it('Work With Us should exist and be visible in the nav bar', function () {
                cy.get('nav')
                    .contains('Work With Us')
                    .should('exist')
                    .and('be.visible');
            });

            it('Should display magnifying glass search', () => {
                cy.get('[data-cy=search-glass]')
                    .should('exist')
                    .and('be.visible');
            });
        });

        describe('Navigation tabs', () => {
            it('Should navigate to home when logo is clicked', () => {
                cy.visit('localhost:3333/about');
                cy.get('.navbar-brand').click();
                cy.get('.hero').should('exist').and('be.visible');
            });

            it('Should navigate to our work page', () => {
                cy.get('[data-cy=our-work]').click();
                cy.get('header').should('exist').and('be.visible');
            });

            it('Should navigate to blogs', () => {
                cy.get('[data-cy=resources]').click();
                cy.get('[data-cy=blog] > .nav-link').click();
                cy.get('#featured-blog-title').should('exist').and('be.visible');
            });

            it('Github button should open another tab', () => {
                cy.get('[data-cy=resources]').click();
                cy.get('#github').should('have.attr', 'href')
                    .and('contain', 'github.com/openforge');
                cy.get('#github').should('have.attr', 'target', '_blank');
            });

            it('Should navigate to meet the team', () => {
                cy.get('[data-cy=about]').click();
                cy.get('[data-cy=meet] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
            });

            it('Should navigate to partners', () => {
                cy.get('[data-cy=about]').click();
                cy.get('[data-cy=partners] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
            });

            it('Should navigate to work with us', () => {
                cy.get('[data-cy=contact]').click();
                cy.get('.contact-form').should('exist').and('be.visible');
            });

            it('Our work tab should be on select state', () => {
                cy.get('[data-cy=our-work]').click();
                cy.get('[data-cy=our-work] > .hydrated > .nav-link').should('have.class', 'active');
                cy.get('.mobilemeasures').scrollIntoView();
                cy.get('[data-cy=mobilembutton]').click();
                cy.get('[data-cy=our-work] > .hydrated > .nav-link').should('have.class', 'active');
                cy.get('.more-projects').scrollIntoView();
                cy.get(':nth-child(1) > .other-button > stencil-route-link.hydrated > a > button').click();
                cy.get('[data-cy=our-work] > .hydrated > .nav-link').should('have.class', 'active');
                cy.get('.more-projects').scrollIntoView();
                cy.get(':nth-child(2) > .other-button > stencil-route-link.hydrated > a > button').click();
                cy.get('[data-cy=our-work] > .hydrated > .nav-link').should('have.class', 'active');
            });

            it('While on the Blog page the "Resources" tab should be in selected state', () => {
                cy.visit(env);
                cy.get('[data-cy=resources]').click();
                cy.get('[data-cy=blog] > .nav-link').click();
                cy.get('#featured-blog-title').should('exist').and('be.visible');
                cy.get('#navbarDropdown0 > .nav-link').should('have.class', 'active');
                cy.get('#featured-blog-title').click();
                cy.get('#navbarDropdown0 > .nav-link').should('have.class', 'active');
            });

            it('While on the about page the "About tab" is in the selected state as well as "Meet the team"', () => {
                cy.visit(env);
                cy.get('#navbarDropdown1 > .nav-link').click();
                cy.get('[data-cy=meet] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
                cy.get('#members').scrollIntoView();
                cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
                cy.get('#navbarDropdown1 > .nav-link').should('have.class', 'active');
            });

            it('While on the partners page the "About" tab should be in selected state as well as "Partners"', () => {
                cy.visit(env);
                cy.get('#navbarDropdown1 > .nav-link').click();
                cy.get('[data-cy=partners] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
                cy.get('#navbarDropdown1 > .nav-link').should('have.class', 'active');
                cy.get('[data-cy=partners] > .nav-link').should('have.class', 'active');
            });

            it('While on the contact page the "Work With Us" tab should be in selected state', () => {
                cy.visit(env);
                cy.get('[data-cy=contact] > .nav-link').click();
                cy.get('.contact-form').should('exist').and('be.visible');
                cy.get('[data-cy=contact] > .nav-link').should('have.class', 'active');
            });

            it('User is able to open the search functionality', () => {
                cy.visit(env);
                cy.get('[data-cy=search-glass]').click();
                cy.get('.blog-search-group').should('exist').and('be.visible');
                cy.get('#navbarDropdown1 > .nav-link').should('not.be.visible');
                cy.get('.blog-close-icon > .svg-inline--fa > path').click();
                cy.get('.blog-search-group').should('exist').and('not.be.visible');
                cy.get('#navbarDropdown1 > .nav-link').should('be.visible');
            });

            it('User should be able to search for Blog posts and navigate to search results', () => {
                cy.visit(env);
                cy.get('[data-cy=search-glass]').click();
                cy.get('.blog-search-group').should('exist').and('be.visible');
                cy.get('#blog-search').type('Dark');
                cy.get(':nth-child(4) > .col-12 > h1 > .hydrated > a').contains('How to Design for Dark Mode');
                cy.get(':nth-child(4) > .col-12 > p').should('exist').and('be.visible');
                cy.get(':nth-child(4) > .col-12 > p').contains('Recently, Apple and Google have announced that');
                cy.get(':nth-child(4) > .col-12 > .categories > :nth-child(1)').contains('Design');
                cy.get(':nth-child(4) > .col-12 > .categories > :nth-child(2)').contains('ios');
                cy.get(':nth-child(4) > .col-12 > .categories > :nth-child(3)').contains('Mobile');
                cy.get(':nth-child(4) > .col-12 > h1 > .hydrated > a').click();
                cy.get('.header > .text-left').contains('How to Design for Dark Mode');
                cy.get('.blog-search-group').should('exist').and('not.be.visible');
                cy.get('#navbarDropdown1 > .nav-link').should('be.visible');
            });
        });

    });

    describe('Tablet Mode', function () {
        describe('Should display the correct tabs', () => {
            beforeEach(() => {
                cy.viewport('ipad-2');
                cy.get('[data-cy=burgerMenu]').as('burgerMenu');
            });

            it('Navbar should exist', () => {
                cy.visit(env);
                cy.get('nav')
                    .should('exist')
                    .and('be.visible');
            });

            it('Nav bar should show the OpenForge logo', function () {
                cy.get('@burgerMenu').click();
                cy.get('.navbar-brand')
                    .should('exist')
                    .and('be.visible');
            });

            it('Our Work should exist and be visible in the nav bar', function () {
                cy.get('@burgerMenu').click();
                cy.get('nav')
                    .contains('Our Work')
                    .should('exist')
                    .and('be.visible');
            });

            it('About should exist and be visible in the nav bar', function () {
                cy.get('@burgerMenu').click();
                cy.get('nav')
                    .contains('About')
                    .should('exist')
                    .and('be.visible');
            });

            it('Resources should exist and be visible in the nav bar', function () {
                cy.get('@burgerMenu').click();
                cy.get('nav')
                    .contains('Resources')
                    .should('exist')
                    .and('be.visible');
            });

            it('Work With Us should exist and be visible in the nav bar', function () {
                cy.get('@burgerMenu').click();
                cy.get('nav')
                    .contains('Work With Us')
                    .should('exist')
                    .and('be.visible');
            });

            it('Should display magnifying glass search', () => {
                cy.get('@burgerMenu').click();
                cy.get('.search-input')
                    .should('exist')
                    .and('be.visible');
            });
        });

        describe('Navigation tabs', () => {
            beforeEach(() => {
                cy.viewport('ipad-2');
                cy.get('[data-cy=burgerMenu]').as('burgerMenu');
            });

            it('Should navigate to home when logo is clicked', () => {
                cy.visit('localhost:3333/about');
                cy.get('@burgerMenu').click();
                cy.get('.navbar-brand').click();
                cy.get('.hero').should('exist').and('be.visible');
            });

            it('Should navigate to our work page', () => {
                cy.get('@burgerMenu').click();
                cy.get('[data-cy=our-work]').click();
                cy.get('header').should('exist').and('be.visible');
            });

            it('Should navigate to blogs', () => {
                cy.get('@burgerMenu').click();
                cy.get('[data-cy=resources]').click();
                cy.get('[data-cy=blog] > .nav-link').click();
                cy.get('#featured-blog-title').should('exist').and('be.visible');
            });

            it('Github button should open another tab', () => {
                cy.get('@burgerMenu').click();
                cy.get('[data-cy=resources]').click();
                cy.get('#github').should('have.attr', 'href')
                    .and('contain', 'github.com/openforge');
                cy.get('#github').should('have.attr', 'target', '_blank');
            });

            it('Should navigate to meet the team', () => {
                cy.get('@burgerMenu').click();
                cy.get('[data-cy=about]').click();
                cy.get('[data-cy=meet] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
            });

            it('Should navigate to partners', () => {
                cy.get('@burgerMenu').click();
                cy.get('[data-cy=about]').click();
                cy.get('[data-cy=partners] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
            });

            it('Should navigate to work with us', () => {
                cy.get('@burgerMenu').click();
                cy.get('[data-cy=contact]').click();
                cy.get('.contact-form').should('exist').and('be.visible');
            });

            it('Our work tab should be on select state', () => {
                cy.get('@burgerMenu').click();
                cy.get('[data-cy=our-work]').click();
                cy.get('[data-cy=our-work] > .hydrated > .nav-link').should('have.class', 'active');
                cy.get('.mobilemeasures').scrollIntoView();
                cy.get('[data-cy=mobilembutton]').click();
                cy.get('[data-cy=our-work] > .hydrated > .nav-link').should('have.class', 'active');
                cy.get('.more-projects').scrollIntoView();
                cy.get(':nth-child(1) > .other-button > stencil-route-link.hydrated > a > button').click();
                cy.get('[data-cy=our-work] > .hydrated > .nav-link').should('have.class', 'active');
                cy.get('.more-projects').scrollIntoView();
                cy.get(':nth-child(2) > .other-button > stencil-route-link.hydrated > a > button').click();
                cy.get('[data-cy=our-work] > .hydrated > .nav-link').should('have.class', 'active');
            });

            it('While on the Blog page the "Resources" tab should be in selected state', () => {
                cy.visit(env);
                cy.get('@burgerMenu').click();
                cy.get('[data-cy=resources]').click();
                cy.get('[data-cy=blog] > .nav-link').click();
                cy.get('#featured-blog-title').should('exist').and('be.visible');
                cy.get('#navbarDropdown0 > .nav-link').should('have.class', 'active');
                cy.get('#featured-blog-title').click();
                cy.get('#navbarDropdown0 > .nav-link').should('have.class', 'active');
            });

            it('While on the about page the "About tab" is in the selected state as well as "Meet the team"', () => {
                cy.visit(env);
                cy.get('@burgerMenu').click();
                cy.get('#navbarDropdown1 > .nav-link').click();
                cy.get('[data-cy=meet] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
                cy.get('#members').scrollIntoView();
                cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
                cy.get('#navbarDropdown1 > .nav-link').should('have.class', 'active');
            });

            it('While on the partners page the "About" tab should be in selected state as well as "Partners"', () => {
                cy.visit(env);
                cy.get('@burgerMenu').click();
                cy.get('#navbarDropdown1 > .nav-link').click();
                cy.get('[data-cy=partners] > .nav-link').click();
                cy.get('.hero').should('exist').and('be.visible');
                cy.get('#navbarDropdown1 > .nav-link').should('have.class', 'active');
                cy.get('[data-cy=partners] > .nav-link').should('have.class', 'active');
            });

            it('While on the contact page the "Work With Us" tab should be in selected state', () => {
                cy.visit(env);
                cy.get('@burgerMenu').click();
                cy.get('[data-cy=contact] > .nav-link').click();
                cy.get('.contact-form').should('exist').and('be.visible');
                cy.get('[data-cy=contact] > .nav-link').should('have.class', 'active');
            });

            it('User is able to open the search functionality', () => {
                cy.visit(env);
                cy.get('@burgerMenu').click();
                cy.get('.search-input').click();
                cy.get('.blog-search-group').should('exist').and('be.visible');
                cy.get('#navbarDropdown1 > .nav-link').should('not.be.visible');
                cy.get('.blog-close-icon > .svg-inline--fa > path').click();
                cy.get('.blog-search-group').should('exist').and('not.be.visible');
                cy.get('.col-lg-4 > h1 > .hydrated').should('be.visible');
            });

            it('User should be able to search for Blog posts and navigate to search results', () => {
                cy.visit(env);
                cy.get('@burgerMenu').click();
                cy.get('.search-input').click();
                cy.get('.blog-search-group').should('exist').and('be.visible');
                cy.get('#blog-search').type('Dark');
                cy.get(':nth-child(4) > .col-12 > h1 > .hydrated > a').contains('How to Design for Dark Mode');
                cy.get(':nth-child(4) > .col-12 > p').should('exist').and('be.visible');
                cy.get(':nth-child(4) > .col-12 > p').contains('Recently, Apple and Google have announced that');
                cy.get(':nth-child(4) > .col-12 > .categories > :nth-child(1)').contains('Design');
                cy.get(':nth-child(4) > .col-12 > .categories > :nth-child(2)').contains('ios');
                cy.get(':nth-child(4) > .col-12 > .categories > :nth-child(3)').contains('Mobile');
                cy.get(':nth-child(4) > .col-12 > h1 > .hydrated > a').click();
                cy.get('.header > .text-left').contains('How to Design for Dark Mode');
                cy.get('.blog-search-group').should('exist').and('not.be.visible');
                cy.get('#mc-embedded-subscribe').should('be.visible');
            });
        });
    });
});
