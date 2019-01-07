describe('JuntoScope Page', function () {
    var env = 'http://localhost:3333';
    beforeEach(() => {
      cy.visit( env + '/juntoscope')
    })

    /** describe('Nav Bar Navigation (Desktop)', function(){
        it('Home on nav Bar should redirect to home page', function(){
          cy.get('.navbar').contains('Home').click()
          cy.url().should('include', '/')
          cy.contains('Creating Digital Experiences')
        })
        it('Services should drop down to display Development and navigate to developer page', function(){
          cy.get('.navbar').contains('Services').click()
          cy.get('.navbar').contains('Development').click()
          cy.url().should('include', '/app-developer')
          cy.contains('Your Go-To App Developer')
        })
        it('Services should drop down to display UI/UX Design and navigate to design page', function(){
          cy.get('.navbar').contains('Services').click()
          cy.get('.navbar').contains('UX/UI Design').click()
          cy.url().should('include', '/app-designer')
          cy.contains('UI/UX App Designer')
        })
        it('Services should drop down to display Consulting and navigate to consulting page', function(){
          cy.get('.navbar').contains('Services').click()
          cy.get('.navbar').contains('Consulting').click()
          cy.url().should('include', '/startup-consulting')
          cy.contains('Consulting for all Industries')
        })
        it('About should drop down to display Meet the team and navigate to about page', function(){
          cy.get('.navbar').contains('About').click()
          cy.get('.navbar').contains('Meet the team').click()
          cy.url().should('include', '/about')
          cy.contains('We Are Passionate About Technology and Design')
        })
        it('About should drop down to display Juntoscope Case Study and navigate to juntoscope page', function(){
          cy.get('.navbar').contains('About').click()
          cy.get('.navbar').contains('Juntoscope Case Study').click()
          cy.url().should('include', '/juntoscope')
          cy.contains('Case Study')
        })
        it('About should drop down to display Toolbox and navigate to Toolbox page', function(){
          cy.get('.navbar').contains('About').click()
          cy.get('.navbar').contains('Toolbox').click()
          cy.url().should('include', '/toolbox')
          cy.contains('Here are some of the tools we use')
        })
        it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function(){
          cy.get('.navbar').contains('About').click()
          cy.get('.navbar').contains('PWA White Paper').click()
          cy.url().should('include', '/resources/pwa-white-paper')
          cy.contains('What is a PWA and is it right for you?')
        })
      })

      describe('Nav Bar Navigation (Mobile)', function(){
        beforeEach(() => {
          cy.viewport(960,600) // Sets view to large to enable nav menu
          cy.get('.navbar-toggler').click() //expands nav menu before each test
        })
        it('Nav menu should collapse', function(){
          cy.wait(2000)
          cy.get('.navbar-toggler').click()
          //cy.get('.navbar').should('not.be.visible', 'About')
        })
        it('Home on nav Bar should redirect to home page', function(){
          cy.get('.navbar').contains('Home').click()
          cy.url().should('include', '/')
          cy.contains('Creating Digital Experiences')
        })
        it('Services should drop down to display Development and navigate to developer page', function(){
          cy.get('.navbar').contains('Services').click()
          cy.get('.navbar').contains('Development').click()
          cy.url().should('include', '/app-developer')
          cy.contains('Your Go-To App Developer')
        })
        it('Services should drop down to display UI/UX Design and navigate to design page', function(){
          cy.get('.navbar').contains('Services').click()
          cy.get('.navbar').contains('UX/UI Design').click()
          cy.url().should('include', '/app-designer')
          cy.contains('UI/UX App Designer')
        })
        it('Services should drop down to display Consulting and navigate to consulting page', function(){
          cy.get('.navbar').contains('Services').click()
          cy.get('.navbar').contains('Consulting').click()
          cy.url().should('include', '/startup-consulting')
          cy.contains('Consulting for all Industries')
        })
        it('About should drop down to display Meet the team and navigate to about page', function(){
          cy.get('.navbar').contains('About').click()
          cy.get('.navbar').contains('Meet the team').click()
          cy.url().should('include', '/about')
          cy.contains('We Are Passionate About Technology and Design')
        })
        it('About should drop down to display Juntoscope Case Study and navigate to juntoscope page', function(){
          cy.get('.navbar').contains('About').click()
          cy.get('.navbar').contains('Juntoscope Case Study').click()
          cy.url().should('include', '/juntoscope')
          cy.contains('Case Study')
        })
        it('About should drop down to display Toolbox and navigate to Toolbox page', function(){
          cy.get('.navbar').contains('About').click()
          cy.get('.navbar').contains('Toolbox').click()
          cy.url().should('include', '/toolbox')
          cy.contains('Here are some of the tools we use')
        })
        it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function(){
          cy.get('.navbar').contains('About').click()
          cy.get('.navbar').contains('PWA White Paper').click()
          cy.url().should('include', '/resources/pwa-white-paper')
          cy.contains('What is a PWA and is it right for you?')
        })
      })*/
      /** 
      describe('Header', function() {
        it('Header should display with appropriate text content within it', function() {
          const h2Content =  'CASE STUDY'
          const pContent = 'Painless Project Scoping with Juntoscope'
    
          cy.get('header').should('exist').and('be.visible')
          cy.get('.hero').contains(h2Content).and('be.visible')
          cy.get('.hero').contains(pContent).and('be.visible')
        })
    })

    describe('Content', function() {
        it('The problem should display with content', function() {
            cy.get('.container').contains('The Problem')
            cy.get('.container').contains('Determining a scope of hours for a large project that will be completed by a team of developers is difficult and leaves too high of a margin of error - and mistakes can be costly! Project Managers need a way to accurately determine the scope of a project in a way that accounts for differences in experience levels across a team.')
        })
        it('The Goal displays with content and background graphic', function(){
            cy.get('.container').contains('The Goal')//fails randomly
            cy.get('.container').contains('Create an app that allows a team to accurately scope a collaborative project in a way that is seamless, painless and reduces the margin of error. Our audience? Developers, project managers, consultants, and anyone looking to maximize the efficiency of their team.')
        })
    })
    
    describe('The Product', function(){
        it('The Product displays with content and Graphic', function(){
            cy.get('.text-container').contains('The Product')//fails randomly
            cy.get('.text-container').contains('The goal of JuntoScope is to help teams determine scopes for tasks in Teamwork.com© Projects more accurately, quickly, and efficiently to keep projects within budget and on time. Integrating with Teamwork Projects API, teams will be able to:')
            cy.get('#product-section-image').should('exist').and('be.visible')
        })
        it('The product bullets dispaly', function(){
            cy.get('.text-container').contains('Scope tasks anonymously and accurately without influence of other team members')
            cy.get('.text-container').contains('Determine team averages for scoped items to give the best estimate')
            cy.get('.text-container').contains('Allow team members to scope items easily through their mobile device')
            cy.get('.text-container').contains('Increase accuracy of scoped time for tasks within Teamwork Projects')
            cy.get('.text-container').contains('Prevent teams from going over scope')
            cy.get('.text-container').contains('Improve ROI')
            cy.get('.text-container').contains('Decrease time spent scoping tasks')           
        })
    })

    describe('The Process', function(){
        it('The Process dispalys', function(){
            cy.get('.container').contains('The Process')//fails randomly
        })
        describe('Discovery', function(){
            it('Discovery card on timeline displays all content', function(){
                cy.get('.timeline').contains('Discovery')
                cy.get('.timeline').contains('Identify the problem')
                cy.get('.timeline').contains('Research competing products')
                cy.get('.timeline').contains('Create a lean canvas and feature pyramid')
                cy.get('#timeline-discovery-image').should('exist').and('be.visible')
            })
        })
        describe('Design', function(){
            it('Design card on timeline displays all content', function(){
                cy.get('.timeline').contains('Design')
                cy.get('.timeline').contains('Wireframing and user flows')
                cy.get('.timeline').contains('Creation of branding and design guidelines')
                cy.get('.timeline').contains('Implementation of guidelines')
                cy.get('#timeline-design-image').should('exist').and('be.visible')
            })
        })
        describe('Development', function(){
            it('Development card on timeline displays all content', function(){
                cy.get('.timeline').contains('Development')
                cy.get('.timeline').contains('Documentation, architecture & server set up')
                cy.get('.timeline').contains('Creation of framework')
                cy.get('.timeline').contains('Feature development & review')
                cy.get('#timeline-development-image').should('exist').and('be.visible')
            })
        })
        describe('Quality Assurance', function(){
            it('Quality Assurance card on timeline displays all content', function(){
                cy.get('.timeline').contains('Quality Assurance')
                cy.get('.timeline').contains('Feature Testing')
                cy.get('.timeline').contains('Bug Fixes')
                cy.get('.timeline').contains('Final review & app submission')
                cy.get('#timeline-quality-assurance-image').should('exist').and('be.visible')
            })
        })
        describe('Launch', function(){
            it('Launch card on timeline displays all content', function(){
                cy.get('.timeline').contains('Launch')
                cy.get('#timeline-quality-assurance-image').should('exist').and('be.visible')
            })
        })
    })*/

    describe('A Deeper Dive section', function(){
        it('A Deeper Dive Displays', function(){
            cy.get('#conclusion-section').contains('A Deeper Dive')
        })
        describe('Design', function(){
            it('Design Paragraph Displays Correctly', function(){
                cy.get('#conclusion-section').contains('Design')
                cy.get('#conclusion-section').contains('We began the design process by researching similar apps on the marketplace and identifying features we liked and did not like about them. We then set up user flows and wireframing each identified screen. This process, along with the design and styling phase, occurs in Sketch. After completing the full skeleton, we reviewed each user flow and tried to identify any gaps or weaknesses in the user flow. From there, we made modifications and began identifying styles and colors for the app. We created a logo and a splash screen and applied the styles to the rest of the screens. We then created a working prototype in Marvel to aid our development team in the next phase and prepared for handoff.')
            })
        })
        describe('Development', function(){
            it('Development Paragraph Displays Correctly', function(){
                cy.get('#conclusion-section').contains('Development')
                cy.get('#conclusion-section').contains('We began the development process with a full design review. Our team worked closely with the designers to document a list of feature requirements that would later translate into development requirements. From there, we architected and established a base draft for client and server side implementation. We iterated through a review process as we gradually expanded and started to develop features.From our draft a skeleton client-side application is started in-tangent with developing server-side implementation to test and ensure all the data and state was expected and is functioning where it needs to be. Additional developers then followed in client-side to finalize pieces of the skeleton to reflect the designs. As each portion finished, it is formally reviewed, tested, and merged into a `master` branch for that app version. We reviewed these branches at critical milestones and had our quality assurance team review in order to ensure we stayed on top of bugs, in which we tracked in Github.')
            })
        })
        describe('What We Learned', function(){
            it('What We Learned Paragraph Displays Correctly', function(){
                cy.get('#conclusion-section').contains('What we learned')
                cy.get('#conclusion-section').contains('Throughout the process of developing JuntoScope, our team learned the importance of establishing a process that is fully understood by each and every member. Our company was going through a transitional phase early on in the development of JuntoScope bringing on new team members and creating efficient processes. Towards the end of the session phase we discovered that the processes we established for work with our clients wasn\'t being diligently followed for JuntoScope.')
                cy.get('#conclusion-section').contains('This included designs that were not fully reviewed and understood by our development team, designs that did not follow guidelines with consistent styles and symbols, and a lack of forethought into the user experience of people not familiar with the app. What made sense to or team did not make sense to new users. This goes back to the saying, if your user interface needs to be explained, it\'s no good.')
                cy.get('#conclusion-section').contains('As our team came close to launching JuntoScope, we learned from Teamwork.com that they were changing the way their API worked and this forced us to go back to our design and development teams to work in the new authentication flows. This set our team back a few weeks from our initial planned launch. We learned the importance of staying up to date with technical updates to software that we integrate with so we immediately subscribed to their announcements.')
                cy.get('#conclusion-section').contains('Designing and developing JuntoScope was a great learning experience for our team as we used this as a time for us to perfect our internal processes that make all of our subsequent products seamless. This has had a lasting impact on the quality of apps that we produce for our clients and ultimately has made us a better team.')
            })
        })
    })

    describe('Download Our Sketch File', function(){
        it('Download Our Sketch File triggers download', function(){
            cy.get('.download-link').contains('Download our Sketch file').click()
            //add test for currect downlaod location on click
        })
    })

    describe('Back To Top', function(){
        it('Back To Top Scrolls To Top', function(){
            cy.get('.top-link').contains('back to top').click()
            //should check current scroll point
            //cy.window().then(($window) => {
            //    expect($window.scrollY).to.be.closeTo(0, 100);
            //  })
        })
    })

    describe('Page Hyperlinks Work', function(){
        it('Page Hyperlinks Work', function(){
            
        })
    })



      /** describe('Footer Navigation', function() {
        it('Navigate to SLA page', function () {
          cy.contains('Ready our SLA').click()
          cy.url().should('include', '/service-level-agreement')
        })
        it('Navigate to Developer page', function () {
          cy.contains('I\'M A DEVELOPER').click()
          cy.url().should('include', '/opportunities/develop')
        })
        it('Navigate to Design page', function () {
          cy.contains('I\'M A DESIGNER').click()
          cy.url().should('include', '/opportunities/design')
        })
        it('Navigates to StartupJunto Registration Page', function () {
          cy.contains('JOIN US').click()
        })
        it('Navigates to OpenForge Twitter', function () {
          cy.contains('@OpenForge_US').click()
        })
        it('Navigates to OpenForge Facebook', function () {
         cy.contains('OpenForge_US').click()
        })
        it('Navigates to OpenForge Linkedin', function () {
         cy.contains('OpenForge_US').click()
        })
        it('Navigates to OpenForge Instagram', function () {
         cy.contains('@OpenForgeTeam').click()
        })
        //it('Open native mail to contact Hello@openforge.io', function () {
         //cy.contains('hello@openforge.io').click()
         //})
      }) */
})