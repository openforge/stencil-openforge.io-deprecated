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
    describe('Leon', () => {
      it("User is able to see Leon's hero image, Title, and bio", () => {
        cy.get(':nth-child(4) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Leon Degtar');
        cy.get('h3').contains('Director of Operations');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Leon is an operational and financial leader who has worked in a variety of industries and businesses.');
      });

      it("User is able to see Leon's position icon and the second part of his bio", () => {
        cy.get(':nth-child(4) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Leon');
        cy.get('.col-11 > p').contains("Leon provides guidance to our clients and team with clear process and a focus on execution and communication");

      });

      it("User is able to see Leon's skills tags", () => {
        cy.get(':nth-child(4) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Business Analysis');
        cy.get('.chips-container').contains('Financial Oversight');
        cy.get('.chips-container').contains('Organizational Development');
        cy.get('.chips-container').contains('Process Optimization');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(4) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Leon's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Fernando', () => {
      it("User is able to see Fernando's hero image, Title, and bio", () => {
        cy.get(':nth-child(5) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Fernando Del Olmo');
        cy.get('h3').contains('Software Engineer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Growing up, Fernando was surrounded by people who loved computers and gaming.');
      });

      it("User is able to see Fernando's position icon and the second part of his bio", () => {
        cy.get(':nth-child(5) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Fernando');
        cy.get('.col-11 > p').contains("Fernando helps manage the development process of projects; from the initial scoping and architectural planning aspects, all the way through to the actual development of the product.");

      });

      it("User is able to see Fernando's skills tags", () => {
        cy.get(':nth-child(5) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Front-end Wizard');
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('Ionic');
        cy.get('.chips-container').contains('Firebase');
        cy.get('.chips-container').contains('StencilJS');
        cy.get('.chips-container').contains('RxJS');
        cy.get('.chips-container').contains('NGXS');
        cy.get('.chips-container').contains('NGRX');
        cy.get('.chips-container').contains('Redux');
        cy.get('.chips-container').contains('NodeJS');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(5) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Fernando's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Luis', () => {
      it("User is able to see Luis hero image, Title, and bio", () => {
        cy.get(':nth-child(6) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Luis Chacón');
        cy.get('h3').contains('Software Engineer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Luis grew up in San José, Costa Rica where he received his Bachelor’s degree in Computer Science and Informatics.');
      });

      it("User is able to see Luis position icon and the second part of his bio", () => {
        cy.get(':nth-child(6) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Luis');
        cy.get('.col-11 > p').contains("Luis has mastered the agile approach to software development and has the ability to seamlessly transition between tasks and pivot if the necessity arises.");

      });

      it("User is able to see Luis skills tags", () => {
        cy.get(':nth-child(6) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Typescript');
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('Ionic');
        cy.get('.chips-container').contains('Firebase');
        cy.get('.chips-container').contains('Scrum');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(6) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Luis bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Claudio', () => {
      it("User is able to see Claudio's hero image, Title, and bio", () => {
        cy.get(':nth-child(7) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Claudio Del Valle');
        cy.get('h3').contains('Software Engineer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Claudio began programming early in High School as a way to learn more about robotics.');
      });

      it("User is able to see Claudio's position icon and the second part of his bio", () => {
        cy.get(':nth-child(7) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Claudio');
        cy.get('.col-11 > p').contains("Like most of the developers at OpenForge, Claudio is involved in the scoping and development process of mobile apps.");

      });

      it("User is able to see Claudio's skills tags", () => {
        cy.get(':nth-child(7) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('NodeJS');
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('Ionic');
        cy.get('.chips-container').contains('Firebase');
        cy.get('.chips-container').contains('RxJS');
        cy.get('.chips-container').contains('StencilJS');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(7) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Claudio's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Min', () => {
      it("User is able to see Min's hero image, Title, and bio", () => {
        cy.get(':nth-child(8) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Min Lee');
        cy.get('h3').contains('Software Engineer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Min has always been a problem-solver who enjoys optimizing any process and that translated beautifully when he found his passion in development as a result.');
      });

      it("User is able to see Min's position icon and the second part of his bio", () => {
        cy.get(':nth-child(8) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Min');
        cy.get('.col-11 > p').contains("As a developer at OpenForge, Min spends most of his work building out features that deliver value to our clients.");

      });

      it("User is able to see Min's skills tags", () => {
        cy.get(':nth-child(8) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('NodeJS');
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('Ionic');
        cy.get('.chips-container').contains('Firebase');
        cy.get('.chips-container').contains('React');
        cy.get('.chips-container').contains('Full-stack');
        cy.get('.chips-container').contains('Java');
        cy.get('.chips-container').contains('C#');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(8) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Min's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Billy', () => {
      it("User is able to see Billy's hero image, Title, and bio", () => {
        cy.get(':nth-child(9) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('William (Billy) Holloran');
        cy.get('h3').contains('QA Manager');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Billy was born and raised in Philadelphia and started his career training right out of High School');
      });

      it("User is able to see Billy's position icon and the second part of his bio", () => {
        cy.get(':nth-child(9) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('William');
        cy.get('.col-11 > p').contains("As Quality Manager, Billy leads the team in testing all company deliverables.");

      });

      it("User is able to see Billy's skills tags", () => {
        cy.get(':nth-child(9) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Quality Assurance');
        cy.get('.chips-container').contains('Organization');
        cy.get('.chips-container').contains('Planning');
        cy.get('.chips-container').contains('Communication');
        cy.get('.chips-container').contains('Critical Thinking');
        cy.get('.chips-container').contains('Leadership');
        cy.get('.chips-container').contains('Problem-solving');
        cy.get('.chips-container').contains('Sense of Humor');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(9) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Billy's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('May', () => {
      it("User is able to see May's hero image, Title, and bio", () => {
        cy.get(':nth-child(10) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('May Alkhraisha');
        cy.get('h3').contains('Marketing Coordinator');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('After studying business in her home country; Jordan, May undertook a course in Web & Graphic Design');
      });

      it("User is able to see May's position icon and the second part of his bio", () => {
        cy.get(':nth-child(10) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('May');
        cy.get('.col-11 > p').contains("May handles branding, marketing & communication efforts within the company.");

      });

      it("User is able to see May's skills tags", () => {
        cy.get(':nth-child(10) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Branding');
        cy.get('.chips-container').contains('Content Writing');
        cy.get('.chips-container').contains('Editing');
        cy.get('.chips-container').contains('Marketing');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(10) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on May's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Mariela', () => {
      it("User is able to see Mariela's hero image, Title, and bio", () => {
        cy.get(':nth-child(11) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Mariela Mora Quesada');
        cy.get('h3').contains('Project Management');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Mariela is our administrative assistant and is from Coronado;');
      });

      it("User is able to see Mariela's position icon and the second part of his bio", () => {
        cy.get(':nth-child(11) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Mariela');
        cy.get('.col-11 > p').contains("Mariela is in charge of reviewing the team's schedules and generating both internal and external reports, as well as invoicing.");

      });

      it("User is able to see Mariela's skills tags", () => {
        cy.get(':nth-child(11) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Communication');
        cy.get('.chips-container').contains('Problem Solving');
        cy.get('.chips-container').contains('Customer Service');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(11) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Mariela's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Petrell', () => {
      it("User is able to see Petrell's hero image, Title, and bio", () => {
        cy.get(':nth-child(12) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Petrell Vereen');
        cy.get('h3').contains('Software Engineer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Petrell is a mobile developer and software generalist that has been solving software and hardware issues since he was a child.');
      });

      it("User is able to see Petrell's position icon and the second part of his bio", () => {
        cy.get(':nth-child(12) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Petrell');
        cy.get('.col-11 > p').contains("As a core developer, Petrell stays up to date with tech trends and modern code patterns to produce software that is secure and stands the test of time.");

      });

      it("User is able to see Petrell's skills tags", () => {
        cy.get(':nth-child(12) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('Firebase');
        cy.get('.chips-container').contains('React');
        cy.get('.chips-container').contains('Redux');
        cy.get('.chips-container').contains('Typescript');
        cy.get('.chips-container').contains('Vue');
        cy.get('.chips-container').contains('NGRX');
        cy.get('.chips-container').contains('Responsive Design');
        cy.get('.chips-container').contains('CI/CD');
        cy.get('.chips-container').contains('Scripting');
        cy.get('.chips-container').contains('Python');
        cy.get('.chips-container').contains('Java');
        cy.get('.chips-container').contains('Docker');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(12) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Petrell's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Jared', () => {
      it("User is able to see Jared's hero image, Title, and bio", () => {
        cy.get(':nth-child(13) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Jared Bradshaw');
        cy.get('h3').contains('Design Coordinator');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Jared started down the career path of design when he began making cover art for his friends’ music albums.');
      });

      it("User is able to see Jared's position icon and the second part of his bio", () => {
        cy.get(':nth-child(13) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Jared');
        cy.get('.col-11 > p').contains("Jared fills a unique role on the OpenForge team as a hybrid between Visual Designer and Project Manager.");

      });

      it("User is able to see Jared's skills tags", () => {
        cy.get(':nth-child(13) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Graphic Design');
        cy.get('.chips-container').contains('UI Design');
        cy.get('.chips-container').contains('Project Management');
        cy.get('.chips-container').contains('Quality Assurance');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(13) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Jared's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Harry', () => {
      it("User is able to see Harry's hero image, Title, and bio", () => {
        cy.get(':nth-child(14) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Harry Scheuerle');
        cy.get('h3').contains('Software Engineer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Harry is a Villanova alumni who still considers himself a self-taught developer.');
      });

      it("User is able to see Harry's position icon and the second part of his bio", () => {
        cy.get(':nth-child(14) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Harry');
        cy.get('.col-11 > p').contains("As a developer at OpenForge, Harry applies his Full-Stack experience and problem solving talents to advance the active projects at the company");

      });

      it("User is able to see Harry's skills tags", () => {
        cy.get(':nth-child(14) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('Firebase');
        cy.get('.chips-container').contains('React');
        cy.get('.chips-container').contains('Typscript');
        cy.get('.chips-container').contains('NGRX');
        cy.get('.chips-container').contains('RxJS');
        cy.get('.chips-container').contains('Express');
        cy.get('.chips-container').contains('MongoDB');
        cy.get('.chips-container').contains('Javascript');
        cy.get('.chips-container').contains('ES');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(14) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Harry's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Carter', () => {
      it("User is able to see Carter's hero image, Title, and bio", () => {
        cy.get(':nth-child(15) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Carter Simonson');
        cy.get('h3').contains('Software Engineer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Carter is a school student and software developer from small-town Wisconsin');
      });

      it("User is able to see Carter's position icon and the second part of his bio", () => {
        cy.get(':nth-child(15) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Carter');
        cy.get('.col-11 > p').contains("Carter is primarily a mobile developer, and helps our team in the initial setup, planning, and development of new mobile applications");

      });

      it("User is able to see Carter's skills tags", () => {
        cy.get(':nth-child(15) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('Firebase');
        cy.get('.chips-container').contains('React');
        cy.get('.chips-container').contains('Typescript');
        cy.get('.chips-container').contains('Ionic');
        cy.get('.chips-container').contains('NodeJS');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(15) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Carter's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Griffin', () => {
      it("User is able to see Griffin's hero image, Title, and bio", () => {
        cy.get(':nth-child(16) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Griffin Robbins');
        cy.get('h3').contains('Game Designer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('A life-long gamer and native of Massachusetts, Griffin’s transition into a Game Designer was a natural transition.');
      });

      it("User is able to see Griffin's position icon and the second part of his bio", () => {
        cy.get(':nth-child(16) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Griffin');
        cy.get('.col-11 > p').contains("As a member of the design team, Griffin’s main focus is working on our very own game; Startup Wars! He also contributes by providing a continuous flow of creative ideas on other projects");

      });

      it("User is able to see Griffin's skills tags", () => {
        cy.get(':nth-child(16) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Game Design');
        cy.get('.chips-container').contains('UI Design');
        cy.get('.chips-container').contains('Web Design');
        cy.get('.chips-container').contains('Animation');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(16) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Griffin's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Pablo', () => {
      it("User is able to see Griffin's hero image, Title, and bio", () => {
        cy.get(':nth-child(17) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Pablo Huerta');
        cy.get('h3').contains('Software Engineer');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Pablo started coding in High School; specifically, java and C++.');
      });

      it("User is able to see Pablo's position icon and the second part of his bio", () => {
        cy.get(':nth-child(17) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Pablo');
        cy.get('.col-11 > p').contains("As an integral member of the development team, Pablo works hard to ensure that every project he is assigned to behaves in the correct way.");

      });

      it("User is able to see Pablo's skills tags", () => {
        cy.get(':nth-child(17) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Angular');
        cy.get('.chips-container').contains('Firebase');
        cy.get('.chips-container').contains('Ionic');
        cy.get('.chips-container').contains('MongoDB');
        cy.get('.chips-container').contains('Laravel');
        cy.get('.chips-container').contains('NodeJS');
        cy.get('.chips-container').contains('Java');
        cy.get('.chips-container').contains('Javascript');
        cy.get('.chips-container').contains('C#');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(17) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Pablo's bio page", () => {
        cy.get('.footer').scrollIntoView();
        cy.get('.footer').should('be.visible');
      });
    });
    describe('Alberto', () => {
      it("User is able to see Alberto's hero image, Title, and bio", () => {
        cy.get(':nth-child(18) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.header-text > h1').contains('Alberto Carniel');
        cy.get('h3').contains('Marketing Specialist');
        cy.get('.hero').should('have.css', 'background');
        cy.get('.header-text > p').contains('Alberto discovered his passion for Digital Marketing and fully embraced his role as a digital marketing manager within the luxury industry.');
      });

      it("User is able to see Alberto's position icon and the second part of his bio", () => {
        cy.get(':nth-child(18) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.d-none > .hydrated > img').should('exist').and('be.visible');
        cy.get('.col-11 > h2').contains('Alberto');
        cy.get('.col-11 > p').contains("Alberto supports OpenForge’s online marketing and outreach team, as well as search engine optimization efforts.");

      });

      it("User is able to see Alberto's skills tags", () => {
        cy.get(':nth-child(18) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
        cy.get('.chips-container').contains('Automation Marketing');
        cy.get('.chips-container').contains('Social Media Management');
        cy.get('.chips-container').contains('Search Engine Optimization (SEO)');
        cy.get('.chips-container').contains('E-commerce');
        cy.get('.chips-container').contains('Marketplace Management');
        cy.get('.chips-container').contains('Digital Marketing Strategy');
      });

      it('User is able to see "Meet Our Team" and all of our team members images', () => {
        cy.get(':nth-child(18) > stencil-route-link.hydrated > a > .member--overlay > .member--text').click();
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

      it("The footer is visible on Alberto's bio page", () => {
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