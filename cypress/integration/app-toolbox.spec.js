describe('Contact Page', function () {
var env = 'http://localhost:3333';
beforeEach(() => {
  cy.visit( env + '/toolbox')
  cy.wait(500)
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
    it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function(){
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('PWA White Paper').click()
      cy.url().should('include', '/resources/pwa-white-paper')
      cy.contains('What is a PWA and is it right for you?')
    })
    it('Contact should navigate to Contact page', function(){
        cy.get('.navbar').contains('Contact').click()
        cy.url().should('include', '/contact')
        cy.contains('Let\'s Work Together')//failing
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
    it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function(){
      cy.get('.navbar').contains('About').click()
      cy.get('.navbar').contains('PWA White Paper').click()
      cy.url().should('include', '/resources/pwa-white-paper')
      cy.contains('What is a PWA and is it right for you?')
    })
    it('Contact should navigate to Contact page', function(){
        cy.get('.navbar').contains('Contact').click()
        cy.url().should('include', '/contact')
        cy.contains('Let\'s Work Together')//failing
      })
  })

 describe('Header', function() {
    it('Header should display with appropriate text content within it', function() {
      const h2Content =  'Here are some of the tools we use'
      const pContent = 'We believe that your success is our success. We\'re here to challenge your assumptions and help you discover your web or mobile applications full potential.'

      cy.get('header').should('exist').and('be.visible')
      cy.get('.hero').contains(h2Content).and('be.visible')
      cy.get('.hero').contains(pContent).and('be.visible')
    })

    it('Should contain a Learn More button that scrolls down on click', function() {
      cy.get('.hero').find('.btn').should('exist').and('be.visible').and('contain', 'Scroll to Learn More').click()
    })
  })

  describe('UI/UX Section', function(){
    it('UI/UX header displays', function(){
        cy.get('.toolbox').contains('UI/UX Design')
    })
    /**it('Abstract logo displays', function(){
    })*/
    it('Abstract displays and goes to abstracts site', function(){
        cy.get('.toolbox').contains('Abstract').click()
    })
    it('Abstract discription displays', function(){
        cy.get('.toolbox').contains('Abstract allows our team to track our projects across versions and collaborate among team members. Having full transparency on projects ensures that we maintain the consistency and integrity of our designs.')
    })
    /**it('Marvels logo displays', function(){
    })*/
    it('Marvel displays and goes to Marvels site', function(){
        cy.get('.toolbox').contains('Marvel').click()
    })
    it('Marvels discription displays', function(){
        cy.get('.toolbox').contains('Marvel allows our design team to produce a working prototype of a product before it reaches the marketplace. This prototype is then updated in conjunction with each new version and allows for our team to maintain the highest standard of quality assurance.')
    })
    /**it('Sketchs logo displays', function(){
    })*/
    it('Sketch displays and goes to Sketchs site', function(){
        cy.get('.toolbox').contains('Sketch').click()
    })
    it('Sketch discription displays', function(){
        cy.get('.toolbox').contains('Sketch is a powerful tool that allows our designers to seamlessly turn wireframes into beautifully designed products. Specifically created for user interface and user experience design, it is optimized for efficiency and consistency across projects large and small.')
    })
  })

  describe('App Development Section', function(){
    it('App Development header displays', function(){
        cy.get('.toolbox').contains('App Development')
    })
    /**it('Ionics logo displays', function(){
    })*/
    it('Ionic Framework displays and goes to Ionics site', function(){
        cy.get('.toolbox').contains('Ionic Framework').click()
    })
    it('Ionic Framework discription displays', function(){
        cy.get('.toolbox').contains('Ionic Framework gives our team of developers an array of reliable tools and proven UI components. Hybrid Progressive Web Apps come together with reliability and performance using Ionic Framework.')
    })
    /**it('Angular logo displays', function(){
    })*/
    it('Angular displays and goes to Angulars site', function(){
        cy.get('.toolbox').contains('Angular').click()
    })
    it('Angular discription displays', function(){
        cy.get('.toolbox').contains('Angular lays the foundations for our developer team to produce and deploy cross platform mobile and web apps.')
    })
    /**it('GitHubs logo displays', function(){
    })*/
    it('GitHub displays and goes to GitHubs site', function(){
        cy.get('.toolbox').contains('GitHub').click()
    })
    it('GitHub discription displays', function(){
        cy.get('.toolbox').contains('GitHub is an industry standard for hosting code, managing projects, and collaboration between developers. Github gives our development team a channel to effectively produce, manage and refine code.')
    })
  })

  describe('Consulting Section', function(){
    it('Consulting header displays', function(){
        cy.get('.toolbox').contains('Consulting')
    })
    /**it('Marvel logo displays', function(){
    })*/
    it('Marvel displays and goes to Marvels site', function(){
        cy.get('.toolbox').contains('Marvel').click()
    })
    it('Marvel discription displays', function(){
        cy.get('.toolbox').contains('Marvel puts our team and your team on the same page with a prototype that can be easily navigated and refined. Collaboration between our team and yours is seamless with direct commenting and requests within prototypes.')
    })
    /**it('Bitbucket logo displays', function(){
    })*/
    it('Bitbucket displays and goes to Bitbuckets site', function(){
        cy.get('.toolbox').contains('Bitbucket').click()
    })
    it('Bitbucket discription displays', function(){
        cy.get('.toolbox').contains('Bitbucket shows a detailed breakdown of developer productivity by visualizing commit history and the efficiency in which work is performed. Bitbucket gives us the tools to analyze your Git repository and improve your bottom line.')
    })
    /**it('Teamwork logo displays', function(){
    })*/
    it('Teamwork displays and goes to Teamworks site', function(){
        cy.get('.toolbox').contains('Teamwork').click()
    })
    it('Teamwork discription displays', function(){
        cy.get('.toolbox').contains('Teamwork Projects is a powerful project management software that incorporates communication, file storage, progress tracking and time management that is proven for not only our team but yours as well.')
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