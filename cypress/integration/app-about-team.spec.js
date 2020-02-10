import { isYieldExpression } from "typescript";

describe('About page team', function () {
  var env = 'http://localhost:3333';
  beforeEach(() => {
    cy.visit(env + '/about');
  });

  describe('About Hero', () => {
    it('The about page title and paragraph text display', () => {
      cy.get('h1').contains('We Are Passionate About Technology and Design');
      cy.get('.hero > .col-12 > .about-text').contains('We believe that your success is our success');
    });

    it('The meet our team button jumps the user to the "Meet Our Team" section', () => {
      cy.get('.btn').click();
      cy.get('.col-10 > h2 > .hydrated').should('be.visible');
    });

    it('The hero animation displays', () => {
      cy.get('.hero').should('have.css', 'background')
        .and('contain', 'about');
    });

  });
  describe('Our Values', () => {
    it('The "Our values" title text, divider, and paragraph text display', () => {
      cy.get('span > .hydrated').contains('Our Values');
      cy.get('.values > .col-12 > .about-text > .hydrated').contains('While we specialize in user experience design and application development, our true strength lies in our team values');
    });

    it('Our values icons and labels display', () => {
      cy.get('.honesty')
        .should('exist');

      cy.get('.integrity')
        .should('exist');

      cy.get('.transparency')
        .should('exist');

      cy.get(':nth-child(1) > h3 > .hydrated')
        .should('exist');

      cy.get(':nth-child(2) > h3 > .hydrated')
        .should('exist');

      cy.get(':nth-child(3) > h3 > .hydrated')
        .should('exist');

    });
  });
  describe('Team', () => {
    it('"Meet Our Team" header displays', () => {
      cy.get('.col-10 > h2 > .hydrated').should('exist')
        .and('be.visible');
    });

    it('All of the team members photos appear', () => {
      cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(2) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(3) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(4) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(5) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(6) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(7) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(8) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(9) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(10) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(11) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(12) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(13) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(14) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(15) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(16) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(17) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(18) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      cy.get(':nth-child(19) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
    });

    it('Hovering over a team members photo displays the hover state', () => {
      cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text')
        .trigger('mouseover');
      cy.get('.member--overlay').should('be.visible');
    });

    it('Pressing the join us image takes the user to the opportunities page', () => {
      cy.get(':nth-child(19) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
      cy.get('.hero-type-buttons').should('exist');
    });
    describe('Jedi', () => {
      it("User is able to see Jedi's hero image, Title, and bio", () => {
        cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Jedi Weller');
        cy.get('h3').contains('Founder and Head of Technology');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Jedi is our CEO & Head of Technology and a driven community leader who advocates for greater transparency and collaboration throughout business and technology');
      });

      it("User is able to see Jedi's position icon and the second part of his bio", () => {
        cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Jedi');
        cy.get('.col-11 > p').contains("Besides being the chief morale booster, Jedi leads the strategic partnerships and public outreach programs at OpenForge");

      });

      it("User is able to see Jedi's skills tags", () => {
        cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Software Engineering');
        cy.get('.chips-container').contains('Artificial Intelligence');
        cy.get('.chips-container').contains('Product Design');
        cy.get('.chips-container').contains('Business Strategy');
        cy.get('.chips-container').contains('Software Architecture');
        cy.get('.chips-container').contains('Marketing');
        cy.get('.chips-container').contains('Ionic');
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('Node.js');
        cy.get('.chips-container').contains('C#');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('#members').scrollIntoView();
        cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(2) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(3) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(4) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(5) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(6) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(7) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(8) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(9) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(10) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(11) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(12) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(13) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(14) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(15) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(16) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(17) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(18) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(19) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      });

      it("The footer is visible on Jedi's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Paulina', () => {
      it("User is able to see Paulina's hero image, Title, and bio", () => {
        cy.get(':nth-child(2) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Paulina Gallo');
        cy.get('h3').contains('Software Engineer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Paulina started her technical journey at a young age through an interest in video games');
      });

      it("User is able to see Paulina's position icon and the second part of his bio", () => {
        cy.get(':nth-child(2) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Paulina');
        cy.get('.col-11 > p').contains("Besides coding on a daily basis and maintaining her development skills, Paulina is heavily involved with managing the development process");

      });

      it("User is able to see Paulina's skills tags", () => {
        cy.get(':nth-child(2) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Front-end Wizard');
        cy.get('.chips-container').contains('Typescript');
        cy.get('.chips-container').contains('Cordova');
        cy.get('.chips-container').contains('Capacitor');
        cy.get('.chips-container').contains('Firebase');
        cy.get('.chips-container').contains('RxJS');
        cy.get('.chips-container').contains('Ionic');
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('NgRx');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(2) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('#members').scrollIntoView();
        cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(2) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(3) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(4) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(5) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(6) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(7) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(8) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(9) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(10) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(11) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(12) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(13) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(14) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(15) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(16) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(17) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(18) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(19) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      });

      it("The footer is visible on Paulinas's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });

    });
    describe('Rachel', () => {
      it("User is able to see Rachel's hero image, Title, and bio", () => {
        cy.get(':nth-child(3) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Rachel Bennett');
        cy.get('h3').contains('Visual Designer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Originally hailing from the Washington, D.C. area, Rachel first came to Philadelphia to study Graphic Design');
      });

      it("User is able to see Rachel's position icon and the second part of his bio", () => {
        cy.get(':nth-child(3) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Rachel');
        cy.get('.col-11 > p').contains("As Lead Designer, Rachel oversees all design projects and communicates directly with our clients for all design related needs");

      });

      it("User is able to see Rachel's skills tags", () => {
        cy.get(':nth-child(3) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('UX Design');
        cy.get('.chips-container').contains('UI Design');
        cy.get('.chips-container').contains('Web Design');
        cy.get('.chips-container').contains('Product Design');
        cy.get('.chips-container').contains('Graphic Design');
        cy.get('.chips-container').contains('Prototyping');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(3) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('#members').scrollIntoView();
        cy.get(':nth-child(1) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(2) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(3) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(4) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(5) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(6) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(7) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(8) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(9) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(10) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(11) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(12) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(13) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(14) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(15) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(16) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(17) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(18) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
        cy.get(':nth-child(19) > stencil-route-link.hydrated > a > .member--overlay > .member--text').should('be.visible');
      });

      it("The footer is visible on Rachel's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('App-Cta', function () {
      it('Should exist and display title', function () {
        cy.get('app-cta').should('exist');
        cy.get('.align-self-center > h2').contains('Got a vision?');
        cy.get('.align-self-center > p').contains("We've got your back.");
        cy.get('.button > .hydrated').should('exist').and('be.visible');
        cy.get('.cta-image').should('exist').and('be.visible');
      });
      it('Should navigate to the contact page', function () {
        cy.get('app-cta').within(() => {
          cy.get('stencil-route-link')
            .should('exist')
            .should('have.prop', 'url')
            .and('contain', '/contact');
        });
      });
    });
    describe('Footer', function () {
      beforeEach(() => {
        cy.get('app-footer').as('footer');
      });
      it('Should exist and be visible', function () {
        cy.get('@footer').scrollIntoView();
        cy.get('@footer').should('exist');
      });
    });
  });
});