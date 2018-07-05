import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  componentDidLoad() {
    let element;
    let hrefArray;

    element = document.querySelector('.home .hero');
    element.style.backgroundImage = `url('assets/bg-hero-team.png')`;

    try {
      hrefArray = Array.from(document.querySelectorAll('a[href^="#"]'));
      hrefArray.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const element = document.querySelector(this.getAttribute('href'));
          element &&
            element.scrollIntoView({
              block: 'start',
              behavior: 'smooth',
            });
        });
      });
    } catch (e) {
      console.error('caught error componentDidLoad app-home', e);
    }
  }

  scrollToForm() {
    const form = document.getElementById('services');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="home">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <h2>
                  WE BUILD APPS.
                  <button
                    onClick={this.scrollToForm.bind(this)}
                    class="btn btn-primary"
                  >
                    LEARN MORE
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </header>

        {/* section - services */}
        <section id="services" class="bg-gray">
          <div class="services">
            <div class="services--header">
              <h2>What do we provide?</h2>
              <p>
                Whether you are a start up, an enterprise, or somewhere in
                between, we will work with you every step of the way. Choose
                your path below to learm more about our custom services.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris non consectetur quam, eget aliquet ante. In interdum
                    facilisis pretium. Aliquam erat volutpat. Vivamus non nunc
                    eu leo finibus pretium. Curabitur vel dolor purus. Fusce
                    mauris mauris,
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris non consectetur quam, eget aliquet ante. In interdum
                    facilisis pretium. Aliquam erat volutpat. Vivamus non nunc
                    eu leo finibus pretium. Curabitur vel dolor purus. Fusce
                    mauris mauris,
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris non consectetur quam, eget aliquet ante. In interdum
                    facilisis pretium. Aliquam erat volutpat. Vivamus non nunc
                    eu leo finibus pretium. Curabitur vel dolor purus. Fusce
                    mauris mauris,
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

              <div class="work">
                <h3>The Voyage</h3>
                <app-img
                  class=""
                  src="assets/graphic-home-voyage.png"
                  alt="voyage-app-image"
                />
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

              <div class="work">
                <h3>DigiThermo</h3>
                <app-img
                  class=""
                  src="assets/graphic-home-digithermo.png"
                  alt="digithermo-app-image"
                />
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
        </section>

        {/* aside - cta */}
        <app-cta link-url="/about" id="cta-about">
          <span slot="header">Want to learn more about us?</span>
          <span slot="link">Get to know us</span>
        </app-cta>

        {/* section - process */}
        <section id="process" class="bg-gray">
          <div class="container process">
            <h2>Our Process</h2>

            <content-graphic-lg
              img-url="assets/graphic-home-discovery.png"
              preLoadImg={true}
            >
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
              preLoadImg={true}
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

            <content-graphic-lg
              img-url="assets/graphic-home-development.png"
              preLoadImg={true}
            >
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
              preLoadImg={true}
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

            <content-graphic-lg
              img-url="assets/graphic-home-feedback.png"
              preLoadImg={true}
            >
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

        {/* section - persepectives */}
        <section class="bg-black" id="perspectives">
          <div class="container perspectives">
            <img class="img-fluid" src="assets/graphic-home-icons.png" alt="" />
            <h2>We Are Powered by Multiple Perspectives</h2>
            <p>
              Our individual skills, backgrounds, and life experiences have
              shaped us into the company that we are today. Maintaining a
              diverse team helps us to perform better, attract top talent, and
              make smarter decisions.
            </p>
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

            <div class="partners--logos">
              <img
                class="img-fluid"
                src="assets/logo-ionic-black.png"
                alt="Ionic"
              />
              <img
                class="img-fluid"
                src="assets/logo-angular-black.png"
                alt="Angular"
              />
              <img
                class="img-fluid"
                src="assets/logo-capacitor-black.png"
                alt="Capacitor"
              />
              <img
                class="img-fluid"
                src="assets/logo-stencil-black.png"
                alt="Stencil"
              />
              <img
                class="img-fluid"
                src="assets/logo-mysql-black.png"
                alt="Mysql"
              />
              <img
                class="img-fluid"
                src="assets/logo-mongodb-black.png"
                alt="MongoDB"
              />
              <img
                class="img-fluid"
                src="assets/logo-nodejs-black.png"
                alt="Node JS"
              />
              <img
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
