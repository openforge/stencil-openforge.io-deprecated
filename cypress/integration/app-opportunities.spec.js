describe('Opportunities Page', function () {
  beforeEach(() => {
    cy.visit('localhost:3333/opportunities');
    cy.get('button[type=submit]').as('submitBtn');
  });

  describe('Header', function() {
    it('Header should display with appropriate text content', function() {
      const h2Content =  'OpenForge is hiring';
      const pContent = 'team';

      cy.get('header')
        .should('exist')
        .and('be.visible');
      cy.get('header')
        .contains(h2Content)
        .and('be.visible');
      cy.get('header')
        .contains(pContent)
        .and('be.visible');
    });
  });

    describe('Intro Section', function() {
      describe('Content-Graphic-Lg components', function() {
        it('First instance should have expected img-url', function() {
          cy.get('.intro').find('content-graphic-lg').first()
            .should('have.attr', 'img-url', 'assets/graphic-opportunities-suck.jpg');
        });
        it('First instance should have a couple of external links', function() {
          cy.get('.intro')
          .find('content-graphic-lg').first()
            .contains('Ionic')
            .then(($a) => {
              const url = $a.prop('href');
              cy.request(url);
            });
          cy.get('.intro')
            .find('content-graphic-lg').first()
            .contains('React')
            .then(($a) => {
              const url = $a.prop('href');
              cy.request(url);
            });
        });
        it('Second instance should have expected img-url', function() {
          cy.get('.intro').find('content-graphic-lg').first().next()
          .should('have.attr', 'img-url', 'assets/graphic-opportunities-codemaster.jpg');
        });
      });
    });

    describe('Challenges Section', function() {
      it('Should have app-img components', function() {
        cy.get('.challenge').find('app-img').should('have.length', 4);
      });
    });

  describe('Form Actions', function() {
    describe('Range Sliders Fail', function() {
      it('Should not be able to click Request Interview button when slider values are left unchanged', function() {
        cy.get('@submitBtn').should('be.disabled');
      });
    });
    describe('Range Sliders Succeed', function() {
      beforeEach(() => {
        // Mimics users sliding values > 90 for each range slider; watches for changes on the page
        cy.get('input[type=range]').as('range');
        cy.get('@range').each(($ranges) => {
          const ranges = cy.wrap($ranges);
          ranges.invoke('val', 92);
          ranges.trigger('click');
          ranges.trigger('change');
        }).then((change) => {
          cy.get('@submitBtn').click();
        });
      });
        it('Request Interview button should be enabled once all range values are over required values', function() {
          cy.get('@submitBtn').should('not.be.disabled');
        });
      describe('Failed Interview Form Submission', function() {
        let nameField;
        let messageField;

        it('Should not display Thank you message when all fields are not filled out', function() {
          // Only type two of the required fields, leaving rest blank
          nameField = cy.get('input[name=name]')
          .type('Test Name');
          messageField = cy.get('textarea[name=message]')
          .type('This is a test message');
          cy.get('@submitBtn').click();
          cy.get('#apply').find('content-graphic-lg').should('not.exist');
        });
      });
      describe('Successful Interview Form Submission', function () {
        let fileField;
        let nameField;
        let emailField;
        let phoneField;
        let githubField;
        let messageField;

        beforeEach(() => {
          cy.writeFile('cypress/fixtures/test_resume.pdf', 'Test resume');
          // Upload_file function comes from cypress/support/commands.js
          cy.upload_file('test_resume.pdf', 'input[type=file]');
          nameField = cy.get('input[name=name]')
          .type('Test Name');
          emailField = cy.get('input[name=email]')
          .type('testEmail@gmail.com');
          phoneField = cy.get('input[name=phone]')
          .type('1234567890');
          githubField = cy.get('input[name=github')
          .type('www.github.com');
          messageField = cy.get('textarea[name=message]')
          .type('This is a test message');
          cy.get('@submitBtn').click();
        });
        it('On successful form submission content-graphic component should show success message', function() {
          const successSection = cy.get('#apply').find('content-graphic-lg');
          successSection.should('exist');
          successSection.contains('Thank you');
        });
        it('All interview form fields should clear after submission', function() {
          nameField.should('have.value', '');
          emailField.should('have.value', '');
          phoneField.should('have.value', '');
          githubField.should('have.value', '');
          messageField.should('have.value', '');
        });
      });
    });
  });
});
