
describe('Contact Page', function () {
  var env = 'http://localhost:3333';
  describe('The contact form displays with all fields', () => {
    it('Check that the form displays', function () {
      cy.visit(env + '/contact');
      cy.get('#second-content')
        .contains('Get in Touch')
        .should('exist')
        .and('be.visible');
      cy.get('#second-content')
        .contains("Tell us a little bit about what you're working on. We'll be in touch to tell you about the next steps toward accomplishing your goals!")
        .should('exist')
        .and('be.visible');

      cy.get('#contact-form')
        .contains('Full Name*')
        .should('exist')
        .and('be.visible');
      cy.get('#contact-form')
        .contains('E-mail*')
        .should('exist')
        .and('be.visible');
      cy.get('#contact-form')
        .contains('Phone')
        .should('exist')
        .and('be.visible');
      cy.get('#contact-form')
        .contains('What are you working on?')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('User is able to successfully submit a contact form & view the successful submission animation', () => {
    it('Check that the form fades and appears the animation', function () {
      cy.reload();
      cy.wait(3000);
      cy.get('input[name=name]').type('Tester');
      cy.get('input[name=email]').type('Test@openforge.io');
      cy.get('input[name=phone]').type('3333333333');
      cy.get('input[name=message]').type('Testing');
      cy.get('button[type=submit]').click();
      cy.wait(9000);
      cy.get('[data-cy=sub]').should('exist'); //if the image is rendered the submit is done
    });
  });

  describe('User is not able to submit a contact form with a empty full name field', () => {
    it('Check that the submit is disabled', function () {
      cy.reload();
      cy.wait(3000);
      cy.get('input[name=email]').type('Test@openforge.io');
      cy.get('input[name=phone]').type('3333333333');
      cy.get('input[name=message]').type('Testing');
      cy.get('button[type=submit]')
        .should('exist')
        .and('be.disabled');
    });
  });

  describe('User is not able to submit a contact form with a empty email field', () => {
    it('Check that the submit is disabled', function () {
      cy.reload();
      cy.wait(3000);
      cy.get('input[name=name]').type('Tester');
      cy.get('input[name=phone]').type('3333333333');
      cy.get('input[name=message]').type('Testing');
      cy.get('button[type=submit]')
        .should('exist')
        .and('be.disabled');
    });
  });

  describe('User is not able to submit a contact form with a invalid email address', () => {
    it('Check that the submit is disabled', function () {
      cy.reload();
      cy.get('input[name=name]').type('Tester');
      cy.get('input[name=email]').type('Test@openforge@io');
      cy.get('input[name=phone]').type('3333333333');
      cy.get('input[name=message]').type('Testing');
      cy.get('button[type=submit]')
        .should('exist')
        .and('be.disabled');
    });
  });

  describe('The mailbox icon displays on the right hand side of the contact form', () => {
    it('Check that the img exists', function () {
      cy.reload();
      cy.get('[data-cy=mailbox-img]')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('User is not able to submit the contact form after clearing all of the fields', () => {
    it('Check that the submit is disabled after clearing form', function () {
      cy.reload();
      cy.get('input[name=name]').type('Tester');
      cy.get('input[name=name]').clear();
      cy.get('input[name=email]').type('wrong_email');
      cy.get('input[name=email]').clear();
      cy.get('input[name=phone]').type('3333333333');
      cy.get('input[name=phone]').clear();
      cy.get('input[name=message]').type('Testing');
      cy.get('input[name=message]').clear();
      cy.get('button[type=submit]')
        .should('exist')
        .and('be.disabled');
    });
  });

  describe('User is unable to submit a empty contact form', () => {
    it('Check that the button is disabled', function () {
      cy.reload();
      cy.get('button[type=submit]')
        .should('exist')
        .and('be.disabled');
    });
  });

  describe('The footer is visible on the "Contact" page', () => {
    it('Check the footer exists', () => {
      cy.reload();
      cy.get('footer')
        .should('exist')
        .and('be.visible');
    });
  });
});
