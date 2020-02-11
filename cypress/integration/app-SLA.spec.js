describe("SLA", function () {
    var env = 'http://localhost:3333';
    beforeEach(() => {
        cy.visit(env + '/service-level-agreement');
    });

    describe('Hero SLA', () => {
        it('User is able to view the SLA hero content', () => {
            cy.get('.hero-content > h2').contains('Service Level Agreement');
            cy.get('.hero-content > p').contains("Below you can read the contents of our SLA. We welcome questions, so if you have any, don't hesitate to contact us at hello@openforge.io!");
            cy.get('.btn').should('exist').and('be.visible');
        });

        it('User is able to scroll to content via "Learn More"', () => {
            cy.get('.btn').click();
            cy.get('#sla').should('be.visible');
        });

    });
    describe('SLA Table', () => {
        it('User is able to view the Area, Action, and Detail columns', () => {
            cy.get('#sla').scrollIntoView();
            cy.get('.sla-headers > :nth-child(1)').should('be.visible');
            cy.get('.sla-headers > :nth-child(2)').should('be.visible');
            cy.get('.sla-headers > :nth-child(3)').should('be.visible');
        });

        it('User is able to see the Client Service Row', () => {
            cy.get('.sla-headers > :nth-child(1)').scrollIntoView();
            cy.get('#sla > :nth-child(3) > :nth-child(1)').contains('Client Service');
            cy.get('#sla > :nth-child(3) > :nth-child(2)').contains('Client Management');
            cy.get(':nth-child(3) > .sla-detail > ul').contains('Meeting minutes will be used within 24 hours of meeting');
            cy.get(':nth-child(3) > .sla-detail > ul').contains('A weekly status report will be provided on actively scheduled projects/multiple project accounts');
            cy.get(':nth-child(3) > .sla-detail > ul').contains('All Teamwork messages will be responded to within 6 - 24 hours, depending on the priority of the message');
            cy.get(':nth-child(3) > .sla-detail > ul').contains('Clients will be kept up to date on relevant information of project deliverables, including milestones and risks');
            cy.get(':nth-child(3) > .sla-detail > ul').contains('A quarterly review meeting will be scheduled with Client and Client Management team to review overall project and roadmap');
            cy.get(':nth-child(3) > .sla-detail > ul').contains('Handover notes and replacement agency contact will be provided in the case of a switch in provider');
        });

        it('User is able to see the Creative row', () => {
            cy.get('#sla > :nth-child(5) > :nth-child(1)').scrollIntoView();
            cy.get('#sla > :nth-child(5) > :nth-child(1)').contains('Creative');
            cy.get(':nth-child(5) > :nth-child(2)').contains('Concept');
            cy.get(':nth-child(5) > .sla-detail > ul').contains('Concepts will be presented and supported with a strategic and creative rationale');
            cy.get(':nth-child(5) > .sla-detail > ul').contains('Recommendation provided; if requested Creative execution will be adhere to client brand and guidelines where available and appropriate');
            cy.get(':nth-child(5) > .sla-detail > ul').contains('Creative team will attend presentation where feasible or necessary');
        });

        it('User is able to see the Project Management Row', () => {
            cy.get('#sla > :nth-child(7) > :nth-child(1)').scrollIntoView();
            cy.get('#sla > :nth-child(7) > :nth-child(1)').contains('Project Management');
            cy.get(':nth-child(7) > :nth-child(2)').contains('Planning & Scheduling');
            cy.get(':nth-child(7) > .sla-detail > ul').contains("A roadmap of major milestone & feature completions will be provided via Teamwork's Milestone functionality Milestones will be updated and reviewed when necessary");
            cy.get(':nth-child(7) > .sla-detail > ul').contains("Project and production timing plans will be adhered to and in the event of milestones being missed, a revised timing plan will be provided");
            cy.get(':nth-child(7) > .sla-detail > ul').contains("Any changes to ultimate delivery will be discussed and agreed with the Client");
            cy.get(':nth-child(7) > .sla-detail > ul').contains("Openforge will always aim to meet the original deadline");
            cy.get(':nth-child(7) > .sla-detail > ul').contains("Where this is not possible, potential alternative will be provided");
        });

        it('User is able to see the Production row', () => {
            cy.get(':nth-child(9) > :nth-child(1)').scrollIntoView();
            cy.get(':nth-child(9) > :nth-child(1)').contains('Production');
            cy.get(':nth-child(9) > :nth-child(2)').contains('Costs');
            cy.get(':nth-child(9) > .sla-detail > ul').contains("A cost estimate of Creative work will be presented and agreed to by Client before work is started");
            cy.get(':nth-child(9) > .sla-detail > ul').contains("Cost Estimate will be based on approved project brief from client");
            cy.get(':nth-child(9) > .sla-detail > ul').contains("Production cost estimates can be obtained from eternal suppliers on behalf of client");
            cy.get(':nth-child(9) > .sla-detail > ul').contains("A cost estimate of Development work will be presented once Creative work (Design) and Architecture Discovery is completed");
            cy.get(':nth-child(9) > .sla-detail > ul').contains("Any estimates provided before Opeforge's discovery & design process are complete are only estimates, and can not be guaranteed by threshold pricing policy");
            cy.get(':nth-child(9) > .sla-detail > ul').contains("Openforge will proceed with the relevant action following written approval of costs through Teamwork");
            cy.get(':nth-child(9) > .sla-detail > ul').contains("A concept will be delivered on budget. In the event of a concept being over budget, or at risk of going over budget, an alternative on-budget alternative solution will be provided");
            cy.get(':nth-child(9) > .sla-detail > ul').contains("If a concept is delivered over budget due to a change in requirements or a dependency on a 3rd party provider, regular pricing applies. If a concept is delivered over budget for any other reason, threshold pricing will apply");
        });

        it('User is able to see the Finance row', () => {
            cy.get(':nth-child(11) > :nth-child(1)').scrollIntoView();
            cy.get(':nth-child(11) > :nth-child(1)').contains('Finance');
            cy.get(':nth-child(11) > :nth-child(2)').contains('Billing');
            cy.get(':nth-child(11) > .sla-detail > ul').contains("Any changes to costs will be discussed with the client and documented via Teamwork");
            cy.get(':nth-child(11) > .sla-detail > ul').contains('All work is scheduled in advance with prepaid retainers, also known as a "top-up" model');
            cy.get(':nth-child(11) > .sla-detail > ul').contains("Only after payment of hours will client work be scheduled");
            cy.get(':nth-child(11) > .sla-detail > ul').contains("Client automatically approves any hours spent responding to questions or high priority tickets");
        });
    });
    describe('Footer', function () {
        it('User is able to go to the top of the page via "Back to Top"', () => {
            cy.get('.top-link').click();
            cy.get('.hero').should('be.visible');
        });

        it('The footer is visible on the SLA page', () => {
            cy.get('.footer').scrollIntoView();
            cy.get('.footer').should('be.visible');
        });
    });
});