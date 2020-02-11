describe('Partners', function () {
  describe('The "Meet Our Partners" header and body text displays', () => {
    it('Check the header displays', () => {
      cy.visit('localhost:3333/partners');
      cy.get('header')
        .contains('Meet Our Partners')
        .should('exist')
        .and('be.visible');
      cy.get('header')
        .contains('Isaac Newton once said "If I have seen further, it is by standing on the shoulders of giants." and that is exactly how we feel about our partners!')
        .should('exist')
        .and('be.visible');
      cy.get('header')
        .contains(
          'We believe in industry-wide collaboration and have connected with the top firms in their fields in order to create true value to our clients. Our partnerships provide us with cutting-edge solutions and services. The combination of our expertise and their support means we provide you with the best experience money can buy.'
        )
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The "Meet Our Partners" icon displays', () => {
    it('Check the image displays', () => {
      cy.visit('localhost:3333/partners');
      cy.get('[data-cy=head-image]').should('exist');
    });
  });

  describe('The Trusted partners carousel title displays', () => {
    it('Check the header of the carousel', () => {
      cy.visit('localhost:3333/partners');
      cy.get('#trusted-partners')
        .contains('Trusted Partners')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The Trusted Carousel automatically rotates through all 6 slides and then started over', () => {
    it('Check the slider rotates automatically', () => {
      cy.visit('localhost:3333/partners');
      cy.get('#partnersCarousel')
        .contains('Ionic Framework is an open source app development platform which allows our team of developers to build and deploy high-quality cross-platform apps in record time.')
        .should('exist')
        .and('be.visible');
      cy.wait(4000);
      cy.wait(4000);
      cy.wait(4000);
      cy.wait(4000);
      cy.wait(4000);
      cy.wait(4000);
      cy.get('#partnersCarousel')
        .contains('Ionic Framework is an open source app development platform which allows our team of developers to build and deploy high-quality cross-platform apps in record time.')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The carousel displays the correct image and content on all 6 slides', () => {
    it('Check the slides text of the carousel', () => {
      cy.visit('localhost:3333/partners');
      cy.get('#trusted-partners').scrollIntoView();
      cy.get('[data-slide-to=0]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains('Ionic Framework is an open source app development platform which allows our team of developers to build and deploy high-quality cross-platform apps in record time.')
        .should('exist')
        .and('be.visible');
      cy.get('[data-slide-to=1]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains(
          '1776 is the largest start-up incubator in the Northeast Corridor. It is a public benefit corporation that empowers start-ups by providing them with access to a global network of connections, and the intellectual and financial capital needed for them to prosper.'
        )
        .should('exist')
        .and('be.visible');
      cy.get('[data-slide-to=2]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains(
          'Strapi is an open source Headless CMS, used to manage content and make it available through a fully-customizable API. It is a framework designed for building practical applications and services in a matter of hours, instead of the usual weeks; saving your team precious time.'
        )
        .should('exist')
        .and('be.visible');
      cy.get('[data-slide-to=3]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains(
          '215Marketing is a Google Partner and full-service digital marketing agency; providing everything from traditional design to CRM implementation. Their primary focus is creating websites, effective Search Engine Marketing and measuring Return On Investment.'
        )
        .should('exist')
        .and('be.visible');
      cy.get('[data-slide-to=4]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains(
          'Financial GPS is a virtual accounting solution for small enterprises, that presents them with monthly reports and videos. The wonderful team at Financial GPS provides different services, including bookkeeping, payroll processing and tax preparation.'
        )
        .should('exist')
        .and('be.visible');
      cy.get('[data-slide-to=5]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains(
          'Drexel University and the Science Center offer an incubator and accelerator for early-stage, funded start-ups. ic@3401 is a community of experts and investors that plays an important role in the building of the collaborative culture in Philadelphia’s Innovation Neighborhood.'
        )
        .should('exist')
        .and('be.visible');
    });

    it('Check the slides images of the carousel', function () {
      cy.get('[data-cy=capp-img]').each(($el, index) => {
        switch (index) {
          case 0:
            cy.wrap($el)
              .should('have.prop', 'src')
              .and('contain', 'ionic');
            break;

          case 1:
            cy.wrap($el)
              .should('have.prop', 'src')
              .and('contain', '1776');
            break;

          case 2:
            cy.wrap($el)
              .should('have.prop', 'src')
              .and('contain', 'strapi');
            break;

          case 3:
            cy.wrap($el)
              .should('have.prop', 'src')
              .and('contain', '215');
            break;

          case 4:
            cy.wrap($el)
              .should('have.prop', 'src')
              .and('contain', 'financial-gps');
            break;

          case 5:
            cy.wrap($el)
              .should('have.prop', 'src')
              .and('contain', 'drexel-logo');
            break;
        }
      });
    });
  });

  describe('The user is able to navigate the carousel via the Left and right arrows', () => {
    it('Check the user can navigate via Left and right arrows', () => {
      cy.visit('localhost:3333/partners');
      cy.get('#trusted-partners').scrollIntoView();
      cy.get('[data-cy="right-arrow"]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains(
          '1776 is the largest start-up incubator in the Northeast Corridor. It is a public benefit corporation that empowers start-ups by providing them with access to a global network of connections, and the intellectual and financial capital needed for them to prosper.'
        )
        .should('exist')
        .and('be.visible');
      cy.get('[data-cy="left-arrow"]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains('Ionic Framework is an open source app development platform which allows our team of developers to build and deploy high-quality cross-platform apps in record time.')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The user is able to navigate the carousel via the radio buttons at the bottom of the Carousel', () => {
    it('Check the user can navigate via radio buttons', () => {
      cy.visit('localhost:3333/partners');
      cy.get('#trusted-partners').scrollIntoView();
      cy.get('[data-slide-to=1]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains(
          '1776 is the largest start-up incubator in the Northeast Corridor. It is a public benefit corporation that empowers start-ups by providing them with access to a global network of connections, and the intellectual and financial capital needed for them to prosper.'
        )
        .should('exist')
        .and('be.visible');
      cy.get('[data-slide-to=0]').click();
      cy.wait(2000);
      cy.get('#partnersCarousel')
        .contains('Ionic Framework is an open source app development platform which allows our team of developers to build and deploy high-quality cross-platform apps in record time.')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The CTA displays under the carousel', () => {
    it('Check that the user is navigated to contact page', function () {
      cy.visit('localhost:3333/partners');
      cy.get('#cta').scrollIntoView();
      cy.get('#cta')
        .contains('Interested in partnering with us?')
        .should('exist')
        .and('be.visible');
      cy.get('#cta')
        .contains('Contact us today to get started')
        .should('exist')
        .and('be.visible');
      cy.get('#cta')
        .contains('GET IN TOUCH')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The "Get in Touch" button in the CTA navigates the user to the contact page', () => {
    it('Check that the user is navigated to contact page', function () {
      cy.visit('localhost:3333/partners');
      cy.get('[data-cy=cta-button]')
        .should('exist')
        .click();
      cy.wait(2000);
      cy.get('#second-content')
        .contains('Get in Touch')
        .should('exist')
        .and('be.visible');
    });
  });

  describe('The footer is visible on the "Partners" page', () => {
    it('Check the footer exists', () => {
      cy.visit('localhost:3333/partners');
      cy.get('footer')
        .should('exist')
        .and('be.visible');
    });
  });
});
