describe('Contact Page', function() {
  describe('The contact form displays with all fields', () => {
    it('Check that the form displays', function() {
      cy.visit('localhost:3333/contact');
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
    it('Check that the form fades and appears the animation', function() {
      cy.visit('localhost:3333/contact');
      cy.get('input[name=name]').type('Tester');
      cy.get('input[name=email]').type('Test@openforge.io');
      cy.get('input[name=phone]').type('3333333333');
      cy.get('input[name=message]').type('Testing');
      cy.get('button[type=submit]').click();
      cy.wait(9000);
      cy.get('[data-cy=sub]').screenshot('exist'); //if the image is rendered the submit is done
    });
  });

  describe('User is not able to submit a contact form with a empty full name field', () => {
    it('Check that the submit is disabled', function() {
      cy.visit('localhost:3333/contact');
      cy.get('input[name=email]').type('Test@openforge.io');
      cy.get('input[name=phone]').type('3333333333');
      cy.get('input[name=message]').type('Testing');
      cy.get('button[type=submit]')
        .should('exist')
        .and('be.disabled');
    });
  });

  describe('User is not able to submit a contact form with a empty email field', () => {
    it('Check that the submit is disabled', function() {
      cy.visit('localhost:3333/contact');
      cy.get('input[name=name]').type('Tester');
      cy.get('input[name=phone]').type('3333333333');
      cy.get('input[name=message]').type('Testing');
      cy.get('button[type=submit]')
        .should('exist')
        .and('be.disabled');
    });
  });

  describe('User is not able to submit a contact form with a empty email field', () => {
    it('Check that the submit is disabled', function() {
      cy.visit('localhost:3333/contact');
      cy.get('input[name=name]').type('Tester');
      cy.get('input[name=email]').type('wrong_email');
      cy.get('input[name=phone]').type('3333333333');
      cy.get('input[name=message]').type('Testing');
      cy.get('button[type=submit]')
        .should('exist')
        .and('be.disabled');
    });
  });

  describe('The mailbox icon displays on the right hand side of the contact form', () => {
    it('Check that the img exists', function() {
      cy.visit('localhost:3333/contact');
      cy.get('[data-cy=mailbox-img]')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('User is not able to submit the contact form after clearing all of the fields', () => {
    it('Check that the submit is disabled after clearing form', function() {
      cy.visit('localhost:3333/contact');
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
    it('Check that the button is disabled', function() {
      cy.visit('localhost:3333/contact');
      cy.get('button[type=submit]')
        .should('exist')
        .and('be.disabled');
    });
  });

  describe('The footer is visible on the "Contact" page', () => {
    it('Check the footer exists', () => {
      cy.visit('localhost:3333/contact');
      cy.get('footer')
        .should('exist')
        .and('be.visible');
    });
  });
  /*describe('Nav Bar Navigation (Desktop)', function () {
    // TODO -> Test suite for the blog link in nav bar.
    it('Home on nav bar should redirect to home page', function () {
      cy.get('.navbar').contains('Home').click()
      cy.url().should('include', '/')
    })
    describe('Services', function () {
      beforeEach(() => {
        // Gets Services text
        cy.get('.container > #navbarSupportedContent').contains('Services');
        // Clicks services dropdown arrow
        cy.get('.container > #navbarSupportedContent > .navbar-nav > .nav-item > #navbarDropdown').click();
      })
      it('Services should drop down to display Development and navigate to developer page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(1) > .nav-link').contains('Development').click()
        cy.url().should('include', '/app-developer')
      })
      it('Services should drop down to display Design and navigate to design page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(2) > .nav-link').contains('Design').click();
        cy.url().should('include', '/app-designer');
      })
      it('Services should drop down to display Consulting and navigate to consulting page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(3) > .nav-link').contains('Consulting').click()
        cy.url().should('include', '/startup-consulting')
      });
    });

    describe('About', function () {
      it('About should drop down to display Meet the team and navigate to about page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Meet the team').click()
        cy.url().should('include', '/about')
        cy.contains('We Are Passionate About Technology and Design')
      })
      it('About should drop down to display Juntoscope Case Study and navigate to juntoscope page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Juntoscope Case Study').click()
        cy.url().should('include', '/juntoscope')
        cy.contains('Case Study')
      })
      it('About should drop down to display Toolbox and navigate to Toolbox page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Toolbox').click()
        cy.url().should('include', '/toolbox')
        cy.contains('Here are some of the tools we use')
      })
      it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('PWA White Paper').click()
        cy.url().should('include', '/resources/pwa-white-paper')
        cy.contains('What is a PWA and is it right for you?')
      })
    });
  })

  describe('Nav Bar Navigation (Mobile)', function () {
    beforeEach(() => {
      cy.viewport(960, 600) // Sets view to large to enable nav menu
      cy.get('.navbar-toggler').click() // expands nav menu before each test
    })
    it('Nav menu should collapse', function () {
      cy.wait(2000)
      cy.get('.navbar-toggler').click()
    })
    it('Home on nav Bar should redirect to home page', function () {
      cy.get('.navbar').contains('Home').click()
      cy.url().should('include', '/')
    })

    describe('Services', function () {
      beforeEach(() => {
        cy.get('.container > #navbarSupportedContent').contains('Services');
        cy.get('.container > #navbarSupportedContent > .navbar-nav > .nav-item > #navbarDropdown').click();
      })
      it('Services should drop down to display Development and navigate to developer page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(1) > .nav-link').contains('Development').click()
        cy.url().should('include', '/app-developer')
      })
      it('Services should drop down to display Design and navigate to design page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(2) > .nav-link').contains('Design').click()
        cy.url().should('include', '/app-designer')
      })
      it('Services should drop down to display Consulting and navigate to consulting page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(3) > .nav-link').contains('Consulting').click();
        cy.url().should('include', '/startup-consulting');
      })
    });

    describe('About', function () {
      it('About should drop down to display Meet the team and navigate to about page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Meet the team').click()
        cy.url().should('include', '/about')
        cy.contains('We Are Passionate About Technology and Design')
      })
      it('About should drop down to display Juntoscope Case Study and navigate to juntoscope page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Juntoscope Case Study').click()
        cy.url().should('include', '/juntoscope')
        cy.contains('Case Study')
      })
      it('About should drop down to display Toolbox and navigate to Toolbox page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Toolbox').click()
        cy.url().should('include', '/toolbox')
        cy.contains('Here are some of the tools we use')
      })
      it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('PWA White Paper').click()
        cy.url().should('include', '/resources/pwa-white-paper')
        cy.contains('What is a PWA and is it right for you?')
      })
    });
  });

  describe('Header', function () {
    it('Header should display with appropriate text content within it', function () {
      const h2Content = 'Let\'s Work Together'
      const pContent = 'Request Free Quote'

      cy.get('header').should('exist').and('be.visible')
      cy.get('.hero').contains(h2Content).and('be.visible')
      cy.get('.hero').contains(pContent).and('be.visible')
    })

    it('Should contain a Request Now button that scrolls to the form on click', function () {
      cy.get('header')
        .find('.btn')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Request Free Quote')
        .click()
      cy.get('#second-content').click()
    })
  })*/

  // describe('Contact Form', function () {
  //   let nameField;
  //   let emailField;
  //   let phoneField;
  //   let messageField;

  //   describe('Successful form submission', function () {
  //     beforeEach(() => {
  //       nameField = cy.get('input[name=name]').type('Testing');
  //       emailField = cy.get('input[name=email]').type('testEmail@gmail.com');
  //       phoneField = cy.get('input[name=phone]').type('1459341234');
  //       messageField = cy.get('input[name=message]').type('This is a test message');
  //       cy.get('@submitBtn').click();
  //     });

  //     it('Should show a success message on submit when all form values have been filled out', function () {
  //       cy.wait(9000);
  //       cy.get('[data-cy=sub]').screenshot('exist'); //if the image is rendered the submit is done
  //     });

  //   });
  //   describe('Unsucessful form submission', function () {
  //     it('DOM should not show success message when all fields of the form are not filled out', function () {
  //       nameField = cy.get('input[name=name]').type('Test Name');
  //       cy.get('@submitBtn').should('be.disabled');
  //     });
  //   });
  // });
});
