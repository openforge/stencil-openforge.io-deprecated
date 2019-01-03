describe('Contact Page', function () {
  var env = 'https://openforge-dev.firebaseapp.com';
  beforeEach(() => {
    cy.visit( env + '/contact')
    cy.get('button[type=submit]').as('submitBtn')
  })

   describe('Nav Bar Navigation (Desktop)', function(){
    it('Home on nav Bar should redirect to home page', function(){
      cy.get('.navbar').contains('Home').click()
      cy.url().should('include', '/')
    })
    it('Services should drop down to display Development and navigate to developer page', function(){
      cy.get('.navbar').contains('Services').click()
      cy.get('.navbar').contains('Development').click()
      cy.url().should('include', '/app-developer')
    })
    it('Services should drop down to display UI/UX Design and navigate to design page', function(){
      cy.get('.navbar').contains('Services').click()
      cy.get('.navbar').contains('UX/UI Design').click()
      cy.url().should('include', '/app-designer')
    })
    it('Services should drop down to display Consulting and navigate to consulting page', function(){
      cy.get('.navbar').contains('Services').click()
      cy.get('.navbar').contains('Consulting').click()
      cy.url().should('include', '/startup-consulting')
    })
    it('About should drop down to display Meet the team and navigate to about page', function(){
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('Meet the team').click()
      cy.url().should('include', '/about')
    })
    it('About should drop down to display Juntoscope Case Study and navigate to juntoscope page', function(){
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('Juntoscope Case Study').click()
      cy.url().should('include', '/juntoscope')
    })
    it('About should drop down to display Toolbox and navigate to Toolbox page', function(){
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('Toolbox').click()
      cy.url().should('include', '/toolbox')
    })
    it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function(){
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('PWA White Paper').click()
      cy.url().should('include', '/resources/pwa-white-paper')
    })
  })
  describe('Nav Bar Navigation (Mobile)', function(){
    it('Nav menu should expand', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
    })
    it('Nav menu should collapse', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
      cy.wait(2000)
      cy.get('.navbar-toggler').click()
      //cy.get('.navbar').should('not.be.visible', 'About')
    })
    it('Home on nav Bar should redirect to home page', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
      cy.get('.navbar').contains('Home').click()
      cy.url().should('include', '/')
    })
    it('Services should drop down to display Development and navigate to developer page', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
      cy.get('.navbar').contains('Services').click()
      cy.get('.navbar').contains('Development').click()
      cy.url().should('include', '/app-developer')
    })
    it('Services should drop down to display UI/UX Design and navigate to design page', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
      cy.get('.navbar').contains('Services').click()
      cy.get('.navbar').contains('UX/UI Design').click()
      cy.url().should('include', '/app-designer')
    })
    it('Services should drop down to display Consulting and navigate to consulting page', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
      cy.get('.navbar').contains('Services').click()
      cy.get('.navbar').contains('Consulting').click()
      cy.url().should('include', '/startup-consulting')
    })
    it('About should drop down to display Meet the team and navigate to about page', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('Meet the team').click()
      cy.url().should('include', '/about')
    })
    it('About should drop down to display Juntoscope Case Study and navigate to juntoscope page', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('Juntoscope Case Study').click()
      cy.url().should('include', '/juntoscope')
    })
    it('About should drop down to display Toolbox and navigate to Toolbox page', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('Toolbox').click()
      cy.url().should('include', '/toolbox')
    })
    it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function(){
      cy.viewport(960,600)
      cy.get('.navbar-toggler').click()
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('PWA White Paper').click()
      cy.url().should('include', '/resources/pwa-white-paper')
    })
  })

  
  describe('Header', function() {
    it('Header should display with appropriate text content within it', function() {
      const h2Content =  'Let\'s Work Together'
      const pContent = 'Request Free Quote'

      cy.get('header').should('exist').and('be.visible')
      cy.get('.hero').contains(h2Content).and('be.visible')
      cy.get('.hero').contains(pContent).and('be.visible')
    })

    it('Should contain a Request Now button that scrolls to the form on click', function() {
      cy.get('header')
        .find('.btn')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Request Free Quote')
        .click()
      cy.get('#second-content').click()
    })
  })

  describe('Contact Form', function() {
    let nameField;
    let emailField;
    let phoneField;
    let messageField;

    describe('Successful form submission', function () {
      beforeEach(() => {
        nameField = cy.get('input[name=name]').type('Testing')
        emailField = cy.get('input[name=email]').type('testEmail@gmail.com')
        phoneField = cy.get('input[name=phone]').type('1459341234')
        messageField = cy.get('input[name=message]').type('This is a test message')
        cy.get('@submitBtn').click()
      })

      it('Should show a success message on submit when all form values have been filled out', function() {
        cy.wait(2000)
        cy.contains('Thank you')
        //This test will randomly fail, look into it.
      })

      it('All fields should be clear after successful form submission', function() {
        cy.get('input[name=name]').should('have.value', 'Testing')
        cy.get('input[name=email]').should('have.value', 'testEmail@gmail.com')
        cy.get('input[name=phone]').should('have.value', '1459341234')
        cy.get('input[name=message]').should('have.value', 'This is a test message')
      })
    })
    describe('Unsucessful form submission', function() {
      it('DOM should not show success message when all fields of the form are not filled out', function () {
        nameField = cy.get('input[name=name]').type('Test Name')
        cy.get('@submitBtn').should('be.disabled')
      })
    })
  })

  describe('Footer Navigation', function() {
    it('Navigate to SLA page', function () {
      cy.contains('Read our SLA').click()
      cy.url().should('include', '/service-level-agreement')
    })
    it('Navigate to Developer page', function () {
      cy.contains('I\'m a developer').click()
      cy.url().should('include', '/opportunities/develop')
    })
    it('Navigate to Design page', function () {
      cy.contains('I\'m a designer').click()
      cy.url().should('include', '/opportunities/design')
    })
    it('Navigates to StartupJunto Registration Page', function () {
      cy.contains('Register Today').click()
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