describe('Opportunities Page', function () {
  it('User can view the the opportunites page landing state', function () {
    cy.visit('http://localhost:3333/opportunities');
    cy.get('#hero .hero-text-container')
      .contains('Looking for a New Adventure?')
      .should('exist')
      .and('be.visible');
    cy.get('#hero .hero-text-container')
      .contains('If you’re a talented designer or developer, we want to hear from you! Choose the role that best describes you to continue.')
      .should('exist')
      .and('be.visible');
    cy.get('.hero-type-buttons button:first-child()')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible');
    cy.get('.hero-type-buttons button:last-child()')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible');
  });

  it('User can toggle between "Developer" and "Designer"', function () {
    //cy.visit('http://localhost:3333/opportunities');
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons button:first-child()')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#hero').should('have.class', 'header-dev-active');
    cy.get('.hero-arrow-img')
      .should('exist')
      .contains('Let’s get to know each other…')
      .and('be.visible');
    cy.get('.hero-type-buttons button:last-child()')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
  });

  // DEVELOPER SELECTED
  it('User can view the Developer opportunites page', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons button:first-child()')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#hero').should('have.class', 'header-dev-active');
    cy.get('.hero-arrow-img')
      .should('exist')
      .contains('Let’s get to know each other…')
      .and('be.visible');
    cy.get('.hero-arrow-img img')
      .should('exist')
      .and('be.visible')
      .click();
    cy.get('#interviews .content-graphic:first-child()')
      .contains('Forget normal interviews!')
      .should('exist')
      .and('be.visible');
    cy.get('#interviews .content-graphic:first-child()')
      .contains(
        'From our work to our interview process, we break the norm. We believe in Open Source contributions; so part of your interview assignment will be exactly that - build out a simple (open source) '
      )
      .should('exist')
      .and('be.visible');
    cy.get('#interviews .content-graphic:last-child()')
      .contains('We want to put you to the test!')
      .should('exist')
      .and('be.visible');
    cy.get('#interviews .content-graphic:last-child()')
      .contains(
        "Instead of asking you a million questions, we'd rather get to know you another way - seeing how you follow direction, develop, and learn a new technology or pattern that you have not used before."
      )
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('The Challenge')
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('Show us your skills in:')
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('Angular')
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('Redux')
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('API Integration')
      .should('exist')
      .and('be.visible');
    cy.get('#reputation .content-graphic')
      .first()
      .contains('Reputation is Everything.')
      .should('exist')
      .and('be.visible');
    cy.get('[img-url="/assets/graphic-opportunities-ionic.jpg"] > .content-graphic > .text-md-right > p.auto-align > .hydrated')
      .first()
      .contains(
        "Because we value our partnerships"
      )
      .should('exist')
      .and('be.visible');
    cy.get('#reputation .content-graphic')
      .last()
      .contains('Are you prepared?')
      .should('exist')
      .and('be.visible');
    cy.get('[img-url="/assets/opportunities/codemaster.png"] > .content-graphic > :nth-child(2) > p > .hydrated')
      .last()
      .contains(
        "We're looking for someone who’s ready to hit the ground running - someone who wants to turn big ideas into realities. A person who can work on a team, show humility, and is not afraid to learn and teach simultaneously."
      )
      .should('exist')
      .and('be.visible');
  });

  it('User can fill out the Developer sliders', function () {
    //cy.visit('http://localhost:3333/opportunities');
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons button:first-child()')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#apply').scrollIntoView();
    cy.get('#apply .slider-labels p')
      .first()
      .contains('N00b')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider-labels p')
      .last()
      .contains('Expert')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Angular')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Node')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Ionic')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Html')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Css')
      .should('exist')
      .and('be.visible');
    cy.get('#apply p')
      .contains('Not quite...keep sliding or keep learning; you can do it!')
      .should('exist')
      .and('be.visible');
    cy.get('button[type=submit]').should('be.disabled');
    cy.get('input[type=range]').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('header').scrollIntoView();
    cy.get('header')
      .contains('Show Us What You’re Made Of')
      .should('exist')
      .and('be.visible');
  });

  it('User is able to see the developer application page filler content', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons button:first-child()')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('header').scrollIntoView();
    cy.get('header')
      .contains('Show Us What You’re Made Of')
      .should('exist')
      .and('be.visible');
    cy.get('header')
      .contains("If you're curious, hardworking, and adventurous, we're looking for you! Check out our job description and apply today.")
      .should('exist')
      .and('be.visible');
    cy.get('header button.apply-btn')
      .should('exist')
      .and('be.visible');
    cy.get('#apply')
      .contains('Submit your application')
      .should('exist')
      .and('be.visible');
  });

  it('The developer application displays with all fields', function () {
    cy.get('#apply').scrollIntoView();
    cy.get('#applyForm')
      .contains('Resume/CV*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=file]').should('exist');
    cy.get('#applyForm')
      .contains('Full Name*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=name]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('Phone*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=phone]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('E-mail*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=email]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('GitHub URL*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=github]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('What makes you unique?')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('In 200 characters or less, tell us what makes you unique.')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm textarea[name=message]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm button[type=submit]')
      .should('exist')
      .and('be.visible');
  });

  it('User is not able to submit a developer application without a attachment', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(1)')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge.io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a developer application with a empty full name field', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(1)')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=email]').type('testing@openforge.io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a developer aplication with a empty email field', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(1)')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a developer application with a invalid email address', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(1)')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge@io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a developer application with a empty phone number', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(1)')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge.io');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a developer application with a empty github URL', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(1)')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge.io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a developer application after clearing all of the fields', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(1)')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=name]').clear();
    cy.get('input[name=email]').type('testing@openforge@io');
    cy.get('input[name=email]').clear();
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=phone]').clear();
    cy.get('input[name=github]').type('google.com');
    cy.get('input[name=github]').clear();
    cy.get('textarea[name=message]').type('testing');
    cy.get('textarea[name=message]').clear();
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a developer application with a empty "what makes you unique" feild', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(1)')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge@io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is unable to submit a empty developer application', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(1)')
      .should('exist')
      .contains('DEVELOP')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#angular').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#node').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#ionic').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#html').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#css').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  // DESIGNER SELECTED
  it('User can view the Designer opportunites page', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#hero').should('have.class', 'header-design-active');
    cy.get('.hero-arrow-img')
      .should('exist')
      .contains('Let’s get to know each other…')
      .and('be.visible');
    cy.get('.hero-arrow-img img')
      .should('exist')
      .and('be.visible')
      .click();
    cy.get('#interviews .content-graphic:first-child()')
      .contains('Forget normal interviews!')
      .should('exist')
      .and('be.visible');
    cy.get('#interviews .content-graphic:first-child()')
      .contains(
        'At OpenForge, we believe that sometimes actions speak louder than words, so as part of your interview assignment, we’d like to challenge you to design 3 pages of an app of your choosing.'
      )
      .should('exist')
      .and('be.visible');
    cy.get('#interviews .content-graphic:last-child()')
      .contains('We want to put you to the test!')
      .should('exist')
      .and('be.visible');
    cy.get('#interviews .content-graphic:last-child()')
      .contains(
        "Instead of asking you a million questions, we'd rather get to know you another way - seeing how you identify problems and solve them using design principles, hierarchy, and UX best practices."
      )
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('The Challenge')
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('Show us your skills in:')
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('Wireframing')
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('Prototyping')
      .should('exist')
      .and('be.visible');
    cy.get('.challenge .container')
      .contains('Responsive Design')
      .should('exist')
      .and('be.visible');
    cy.get('#reputation .content-graphic')
      .first()
      .contains('Reputation is Everything.')
      .should('exist')
      .and('be.visible');
    cy.get('[img-url="/assets/graphic-opportunities-ionic.jpg"] > .content-graphic > .text-md-right > p.auto-align > .hydrated')
      .first()
      .contains(
        "Because we value our partnerships"
      )
      .should('exist')
      .and('be.visible');
    cy.get('#reputation .content-graphic')
      .last()
      .contains('Are you prepared?')
      .should('exist')
      .and('be.visible');
    cy.get('#reputation .content-graphic')
      .last()
      .contains(
        "We're looking for someone who’s ready to hit the ground running - someone who wants to turn big ideas into realities. A person who can work on a team, show humility, and is not afraid to learn and teach simultaneously."
      )
      .should('exist')
      .and('be.visible');
  });

  it('User can fill out the Designer sliders', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#apply').scrollIntoView();
    cy.get('#apply .slider-labels p')
      .first()
      .contains('N00b')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider-labels p')
      .last()
      .contains('Expert')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Sketch')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Photoshop CC')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Illustrator CC')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Adobe XD CC')
      .should('exist')
      .and('be.visible');
    cy.get('#apply .slider label')
      .contains('Prototyping')
      .should('exist')
      .and('be.visible');
    cy.get('#apply p')
      .contains('Not quite...keep sliding or keep learning; you can do it!')
      .should('exist')
      .and('be.visible');
    cy.get('button[type=submit]').should('be.disabled');
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('header').scrollIntoView();
    cy.get('header')
      .contains('Show Us What You’re Made Of')
      .should('exist')
      .and('be.visible');
  });

  it('User is able to see the designer application page filler content', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('header').scrollIntoView();
    cy.get('header')
      .should('exist')
      .and('be.visible');
    cy.get('header')
      .should('exist')
      .and('be.visible');
    cy.wait(2000);
    cy.get('#apply')
      .should('exist');
  });

  /*it('The designer application displays with all fields', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('#applyForm')
      .contains('Resume/CV*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=file]').should('exist');
    cy.get('#applyForm')
      .contains('Full Name*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=name]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('Phone*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=phone]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('E-mail*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=email]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('Portfolio*')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm input[name=github]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('What makes you unique?')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm')
      .contains('In 200 characters or less, tell us what makes you unique.')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm textarea[name=message]')
      .should('exist')
      .and('be.visible');
    cy.get('#applyForm button[type=submit]')
      .should('exist')
      .and('be.visible');
  });*/

  it('User is not able to submit a designer application without a attachment', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge.io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a designer application with a empty full name field', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=email]').type('testing@openforge.io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a designer aplication with a empty email field', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons  > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a designer application with a invalid email address', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons  > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge@io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a designer application with a empty phone number', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons  > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge.io');
    cy.get('input[name=github]').type('google.com');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a designer application with a empty github URL', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons  > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge.io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('textarea[name=message]').type('testing');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a designer application after clearing all of the fields', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons  > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=name]').clear();
    cy.get('input[name=email]').type('testing@openforge@io');
    cy.get('input[name=email]').clear();
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=phone]').clear();
    cy.get('input[name=github]').type('google.com');
    cy.get('input[name=github]').clear();
    cy.get('textarea[name=message]').type('testing');
    cy.get('textarea[name=message]').clear();
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is not able to submit a designer application with a empty "what makes you unique" feild', function () {
    const fileName = 'dummyPDF.pdf';
    const fileInput = 'input[type=file]';

    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons  > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.upload_file(fileName, fileInput);
    cy.get('input[name=name]').type('Tester');
    cy.get('input[name=email]').type('testing@openforge@io');
    cy.get('input[name=phone]').type('3333333333');
    cy.get('input[name=github]').type('google.com');
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });

  it('User is unable to submit a empty designer application', function () {
    cy.reload();
    cy.wait(3000);
    cy.get('.hero-type-buttons  > :nth-child(2)')
      .should('exist')
      .contains('DESIGNER')
      .and('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#sketch').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#photoshop').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#illustrator').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#adobe').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('#prototyping').each($ranges => {
      const ranges = cy.wrap($ranges);
      ranges.invoke('val', 92);
      ranges.trigger('change');
      ranges.trigger('click');
    });
    cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    cy.get('#apply').scrollIntoView();
    cy.get('#applyForm button[type=submit]')
      .should('be.disabled')
      .and('be.visible');
  });
});
