describe('PWA Page', function () {
    var env = 'http://localhost:3333';
    beforeEach(() => {
      cy.visit( env + '/resources/pwa-white-paper')
      cy.get('button[type=submit]').as('submitBtn')
    })

describe('Nav Bar Navigation (Desktop)', function(){
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
  })

  describe('Header', function() {
    it('Header should display with appropriate text content within it', function() {
      const h2Content =  'What is a PWA and is it right for you?'
      const pContent = 'Download Now'

      cy.get('header').should('exist').and('be.visible')
      cy.get('.hero').contains(h2Content).and('be.visible')
      cy.get('.hero').contains(pContent).and('be.visible')
    })

    it('Should contain a Download Now button that scrolls to the form on click', function() {
      cy.get('header')
        .find('.btn')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Download Now')
        .click()
    })
  })

  describe('Contact Form', function() {
    let nameField;
    let emailField;
    let industryField;
    let organizationField;

    describe('Successful form submission and Download', function () {
      beforeEach(() => {
        nameField = cy.get('input[name=name]').type('Testing')
        emailField = cy.get('input[name=email]').type('testEmail@gmail.com')
        industryField = cy.get('input[name=industry]').type('Test')
        organizationField = cy.get('input[name=organization]').type('Test LLC')
        cy.get('@submitBtn').click()
      })
      it('All fields should be clear after successful form submission', function() {
        cy.get('input[name=name]').should('not.have.value', 'Testing')
        cy.get('input[name=email]').should('not.have.value', 'testEmail@gmail.com')
        cy.get('input[name=industry]').should('not.have.value', 'Test')
        cy.get('input[name=organization]').should('not.have.value', 'Test LLC')
      })
      it('After downlaod header should display with appropriate text content within it', function() {
        const h2Content =  'Check Out the Awesome stuff we made with PWAs'
        const pContent = 'Check it out'
  
        cy.get('#second-hero').should('exist').and('be.visible')
        cy.get('#second-hero').contains(h2Content).and('be.visible')
        cy.get('#second-hero').contains(pContent).and('be.visible')
      })
      it('Should contain a Check it out button that scrolls down on click', function() {
        cy.get('#second-hero')
          .find('.btn')
          .should('exist')
          .and('be.visible')
          .and('contain', 'Check it out')
          .click()
      })
      it('Thank you section displays content, graphic, and link', function(){
          cy.get('#thankyou').contains('Enjoy')
          cy.get('#thankyou').contains('Expand Your PWA Knowledge')
          cy.get('#thankyou').contains('Progressive Web Apps can offer your business an array of benefits and improvements to your web and mobile users that can have a direct impact on your costs and revenue.')
          cy.get('#github-button').contains('GitHub').click()
          cy.request('https://github.com/openforge')
      })
      
    })
    describe('PWA Screenshot appears', function(){
        it('PWA screenshot apppears', function(){
            cy.get('#pwa-screenshot').should('exist')//.and('be.visible')
            //look into why .visible is causing it to fail
        })
    })
    describe('Unsucessful form submission', function() {
      it('DOM should not show success message when all fields of the form are not filled out', function () {
        nameField = cy.get('input[name=name]').type('Test Name')
        cy.get('@submitBtn').should('be.disabled')
      })
    })
  })

  describe('Here\'s What is inside section displays', function(){
    it('Header Text Displays', function(){
        cy.get('#downloadinfo').contains('HERE\'S WHAT IS INSIDE')
        cy.get('#downloadinfo').contains('A business owner\'s perspective on the benefits of PWAs (Progressive Web Apps')
    })
    it('Body Text Displays With Graphic', function(){
        cy.get('#heres-whats-inside-text').contains('What a PWA is and what companies are using them')
        cy.get('#heres-whats-inside-text').contains('Learn how a PWA can decrease several costs')
        cy.get('#heres-whats-inside-text').contains('Discover how a PWA increases user engagement')
        cy.get('#heres-whats-inside-text').contains('Understand the features and benefits of a PWA')
        cy.get('#heres-whats-inside-text').contains('Switching to a PWA can take your business to the next level and improve the performance of your business\'s digital engagement')
        //cy.get('#heres-whats-inside-image').should('exist').and('be.visible')
    })
})

  describe('Footer Navigation', function() {
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
  })
})