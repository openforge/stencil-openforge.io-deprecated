describe('contact test', function () {
    var env = 'http://localhost:3333';
    beforeEach(() => {
        cy.visit(env + '/contact/');
    });
    describe('The contact form displays with all fields', () => {
        expect(element(by.css('#second-content')).getText()).toContains('Get in Touch');

    });
});