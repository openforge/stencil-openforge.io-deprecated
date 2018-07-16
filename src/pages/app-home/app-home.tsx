import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  componentDidLoad() {}

  render() {
    return (
      <div class="home">
        {/* header - hero */}
        <app-hero-home>
          <span slot="header">We are Thinkers. Makers. Doers.</span>
          <span slot="body">
            Work with our team of highly skilled designers, developers, and
            consultants to develop solutions and process that fit your business
            requirements.
          </span>
          <span slot="link">Let's Get Started</span>
        </app-hero-home>

        {/* section - services */}
        <section id="services" class="bg-gray">
          <div class="services">
            <div class="services--header">
              <h2>What do we provide?</h2>
              <p>
                From Startups to Enterprise companies, our specialized team will
                work with you every step of the way to meet your business goals
                and add to your success. Welcome to the OpenForge family -
                scroll down to learn more!
              </p>
            </div>
            <div class="card-container">
              <div class="card">
                <div class="card--image">
                  <app-img
                    class="card--image"
                    src="assets/graphic-home-development-card.png"
                    alt="app-development-image"
                  />
                </div>
                <div class="card--text">
                  <h3>App Development</h3>
                  <p>
                    OpenForge is a world-wide brand in Mobile and Web
                    Application software development. Our team of experienced
                    software engineers specialize in a variety of frameworks and
                    technologies such as
                    <a
                      href="https://ionicframework.com/"
                      target="_blank"
                      rel="noopener"
                    >
                      {' '}
                      The Ionic Framework{' '}
                    </a>,
                    <a
                      href="https://angular.io/"
                      target="_blank"
                      rel="noopener"
                    >
                      {' '}
                      Angular (Google)
                    </a>,
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener"
                    >
                      {' '}
                      React.js (Facebook)
                    </a>,
                    <a
                      href="https://nodejs.org/en/"
                      target="_blank"
                      rel="noopener"
                    >
                      {' '}
                      Node.js
                    </a>,
                    <a
                      href="https://www.mongodb.com/"
                      target="_blank"
                      rel="noopener"
                    >
                      {' '}
                      MongoDB
                    </a>, and many more!
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card--image">
                  <app-img
                    class="card--image"
                    src="assets/graphic-home-design-card.png"
                    alt="ui-ux-design-image"
                  />
                </div>
                <div class="card--text">
                  <h3>UI/UX Design</h3>
                  <p>
                    The OpenForge Discovery &amp; Design Process is specifically
                    engineered to increase ROI, user engagement, and get you
                    results. Our unique process has been proven to keep projects
                    on-time and on-budget every step of the way by utilizing
                    leading technologies such as
                    <a
                      href="https://www.adobe.com/products/photoshop.html"
                      target="_blank"
                      rel="noopener"
                    >
                      {' '}
                      Adobe Photoshop
                    </a>,
                    <a
                      href="https://www.sketchapp.com/"
                      target="_blank"
                      rel="noopener"
                    >
                      {' '}
                      Sketch App
                    </a>, and
                    <a
                      href="https://www.goabstract.com/"
                      target="_blank"
                      rel="noopener"
                    >
                      {' '}
                      Abstract
                    </a>.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card--image">
                  <app-img
                    class="card--image"
                    src="assets/graphic-home-consulting-card.png"
                    alt="consulting-image"
                  />
                </div>
                <div class="card--text">
                  <h3>Consulting</h3>
                  <p>
                    We offer a wide variety of services including Training, CTO
                    Representation, Design Audits, and Software Process
                    Improvement (SPI) Consulting. If you are looking to increase
                    your team's efficiency or bring your product to market
                    on-time and on-schedule, our team is here to help you
                    succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section - our work */}
        <section id="our-work" class="bg-white">
          <div class="container our-work">
            <div class="our-work--header">
              <h2>Check Out Our Work</h2>
            </div>
            <div class="content">
              <div class="work">
                <h3>LoudCloud</h3>
                <app-img
                  class=""
                  src="assets/graphic-home-loudcloud.png"
                  alt="loudcloud-app-image"
                />
                <div class="icons">
                  <app-img
                    class=""
                    src="assets/graphic-apple-appstore.png"
                    alt="apple-app-store-icon"
                  />
                  <app-img
                    class=""
                    src="assets/graphic-google-googleplaystore.png"
                    alt="google-play-store-icon"
                  />
                </div>
              </div>

              <div class="work">
                <h3>The Voyage</h3>
                <app-img
                  class=""
                  src="assets/graphic-home-voyage.png"
                  alt="voyage-app-image"
                />
                <div class="icons">
                  <app-img
                    class=""
                    src="assets/graphic-apple-appstore.png"
                    alt="apple-app-store-icon"
                  />
                  <app-img
                    class=""
                    src="assets/graphic-google-googleplaystore.png"
                    alt="google-play-store-icon"
                  />
                </div>
              </div>

              <div class="work">
                <h3>DigiThermo</h3>
                <app-img
                  class=""
                  src="assets/graphic-home-digithermo.png"
                  alt="digithermo-app-image"
                />
                <div class="icons">
                  <app-img
                    class=""
                    src="assets/graphic-apple-appstore.png"
                    alt="apple-app-store-icon"
                  />
                  <app-img
                    class=""
                    src="assets/graphic-google-googleplaystore.png"
                    alt="google-play-store-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/contact" id="cta-contact">
          <span slot="header">Want to learn more?</span>
          <span slot="link">GET IN TOUCH</span>
        </app-cta>

        {/* section - process */}
        <section id="process" class="bg-gray">
          <div class="container process">
            <h2>Our Process</h2>

            <content-graphic-lg img-url="assets/graphic-home-discovery.png">
              <h3 slot="header">Discovery</h3>
              <p slot="body">
                We'll help you evaluate your business needs and challenge your
                assumptions before entering into the Design and Development
                processs. Make sure that the technology you're building makes
                sense for your business.
              </p>
            </content-graphic-lg>

            <content-graphic-lg
              img-url="assets/graphic-home-consulting.png"
              reverse={true}
            >
              <h3 slot="header">Design &amp; User Experience</h3>
              <p slot="body">
                There is psychology and through behind every effective design.
                Our team of experts sits with you and matches our knowledge of
                Design &amp; User Experience principles with your subject-matter
                knowledge to jointly create the most effective representation of
                your business.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-development.png">
              <h3 slot="header">Development</h3>
              <p slot="body">
                Throw away the development practices of the 1990's and 2000's.
                In order to utilize modern technologies we must use modern
                approaches to software development, including Design &amp; Dev
                integration, Continuous Integration strategies, and
                sophisticated Automated Testing strategies to assure your
                business is always operational.
              </p>
            </content-graphic-lg>

            <content-graphic-lg
              img-url="assets/graphic-home-deployment.png"
              reverse={true}
            >
              <h3 slot="header">Deployment</h3>
              <p slot="body">
                Do you have a dashboard to monitor the state of your
                application? Do you have Continuous Integration and Automated
                Testing strategies to decrease your development and QA testing
                costs? Does releasing an update take more than 1 (one) day? If
                so, let us help you improve your deployment strategy so you can
                get to market quicker, on time, and on budget.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-feedback.png">
              <h3 slot="header">User Feedback</h3>
              <p slot="body">
                The biggest mistake businesses make is to launch a product and
                then stop there. That initial data from the first 3 months is
                crucial for engaging your consumer and enhancing your
                experience. Expand your business by capturing this crucial
                moment; we will help you monitor and improve the entire way.
              </p>
            </content-graphic-lg>
          </div>
        </section>

        {/* section - partners */}
        <section>
          <div class="container partners">
            <h2>Our Industry Partners</h2>
            <p>
              Here are some of our trusted partners. We frequently work with
              these companies to ensure the highest quality to our products and
              to use the program that best fits your app's needs.
            </p>

            <div class="partners--trusted">
              <app-img
                class="img-fluid"
                src="assets/logo-ionic-trusted-black.png"
                alt="Ionic Trusted Partner"
              />
            </div>

            <div class="partners--logos">
              <app-img
                class="img-fluid"
                src="assets/logo-angular-black.png"
                alt="Angular"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-capacitor-black.png"
                alt="Capacitor"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-stencil-black.png"
                alt="Stencil"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-eli-lu-entertainment-black.png"
                alt="Eli and Lu Entertainment"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-mysql-black.png"
                alt="Mysql"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-mongodb-black.png"
                alt="MongoDB"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-nodejs-black.png"
                alt="Node JS"
              />
              <app-img
                class="img-fluid"
                src="assets/logo-aws-black.png"
                alt="AWS"
              />
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/contact">
          <span slot="header">Ready to work with us?</span>
          <span slot="link">Get in touch</span>
        </app-cta>
      </div>
    );
  }
}
