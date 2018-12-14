import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import stickySidebar from 'sticky-sidebar';

declare var fbq;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  @Prop()
  history: RouterHistory;
  @Prop({ context: 'isServer' })
  private isServer: boolean;

  members: any[];
  isMobile = navigator.userAgent.match(
    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
  );

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }

    new stickySidebar('.sidebar', {
      topSpacing: 75.45,
      bottomSpacing: 0,
      containerSelector: '.main-content',
      innerWrapperSelector: '.sidebar-inner',
      minWidth: 767,
    });

    // Change meta tags dynamically
    // document
    //   .querySelector("meta[name='title']")
    //   .setAttribute(
    //     'content',
    //     'Mobile Design - App Development - Startup Consulting | OpenForge'
    //   );
    // document
    //   .querySelector("meta[name='description']")
    //   .setAttribute(
    //     'content',
    //     'OpenForge is the Top Mobile App Development Agency in the US.  We specialize in Mobile Application Development and Design using Ionic and Angular'
    //   );
    // document
    //   .querySelector("meta[name='keywords']")
    //   .setAttribute(
    //     'content',
    //     'Mobile, Application, Development, Design, User Experience, Ionic'
    //   );
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
          <div class="overlay" />
          <div class="container">
            <div class="row align-items-center">
              <div class="hero-content col-sm-12">
                <h1>CREATING DIGITAL EXPERIENCES</h1>
                <h2>EVERY DAY*</h2>
                <p>*Monday–Friday</p>
              </div>
            </div>
          </div>
        </header>

        <section id="process" class="process">
          <div class="text-center">
            <h2>Our Process</h2>
          </div>

          <div id="processCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#processCarousel"
                data-slide-to="0"
                class="active"
              />
              <li data-target="#processCarousel" data-slide-to="1" />
              <li data-target="#processCarousel" data-slide-to="2" />
              <li data-target="#processCarousel" data-slide-to="3" />
              <li data-target="#processCarousel" data-slide-to="4" />
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row --container">
                  <div class="col-6 align-self-center text-center --image">
                    <img
                      class="carousel-image"
                      src="assets/svg/process-analytics.svg"
                    />
                  </div>
                  <div class="col-6 carousel-panel align-self-center --text">
                    <div class="carousel-text">
                      <h2>Discovery</h2>
                      <p>
                        We'll help you evaluate your business needs and
                        challenge your assumptions before entering into the
                        Design and Development process. Make sure that the
                        technology you're building makes sense for your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row --container">
                  <div class="col-6 align-self-center text-center --image">
                    <img
                      class="carousel-image"
                      src="assets/svg/process-development.svg"
                    />
                  </div>
                  <div class="col-6 carousel-panel align-self-center --text">
                    <div class="carousel-text">
                      <h2>Design</h2>
                      <p>
                        At OpenForge, logic and user psychology is the
                        foundation of everything we design. Our team of experts
                        works with you and matches our knowledge of Design &
                        User Experience principles with your subject-matter
                        knowledge to jointly create the most effective
                        representation of your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row --container">
                  <div class="col-6 align-self-center text-center --image">
                    <img
                      class="carousel-image"
                      src="assets/svg/process-development.svg"
                    />
                  </div>
                  <div class="col-6 carousel-panel align-self-center --text">
                    <div class="carousel-text">
                      <h2>Development</h2>
                      <p>
                        Throw away the development practices of the 1990's and
                        2000's. In order to utilize modern technologies we must
                        use modern approaches to software development, including
                        Design & Dev integration, Continuous Integration
                        strategies, and sophisticated Automated Testing
                        strategies to assure your business is always
                        operational.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row --container">
                  <div class="col-6 align-self-center text-center --image">
                    <img
                      class="carousel-image"
                      src="assets/svg/process-deployment.svg"
                    />
                  </div>
                  <div class="col-6 carousel-panel align-self-center --text">
                    <div class="carousel-text">
                      <h2>Deployment</h2>
                      <p>
                        Do you have a dashboard to monitor the state of your
                        application? Do you have Continuous Integration and
                        Automated Testing strategies to decrease your
                        development and QA testing costs? Does releasing an
                        update take more than 1 (one) day? If so, let us help
                        you improve your deployment strategy so you can get to
                        market quicker, on time, and on budget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row --container">
                  <div class="col-6 align-self-center text-center --image">
                    <img
                      class="carousel-image-userfeedback"
                      src="assets/svg/process-userfeedback.svg"
                    />
                  </div>
                  <div class="col-6 carousel-panel align-self-center --text">
                    <div class="carousel-text">
                      <h2>User Feedback</h2>
                      <p>
                        The biggest mistake businesses make is to launch a
                        product and then stop there. That initial data from the
                        first 3 months is crucial for engaging your consumer and
                        enhancing your experience. Expand your business by
                        capturing this crucial moment; we will help you monitor
                        and improve the entire way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#processCarousel"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#processCarousel"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>

        <section id="work" class="work">
          <div class="main-content">
            <div class="sidebar">
              <div class="sidebar-inner">
                <div class="sidebar-inner-text">
                  <h2>Mobile Technology</h2>
                  <p>
                    We utilize technologies such as VoIP, Bluetooth LE, and
                    other IOT technologies to bring a whole new level of
                    connectivity to your application. Our experts in mobile
                    application development can interface with any existing API
                    or standard to integrate systems properly and securely.
                  </p>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="content-panel loudcloud">
                <div class="content-panel-text">
                  <h2>Loud Cloud</h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right --image">
                      <img src="assets/graphic-apple-appstore.png" />
                    </div>
                    <div class="col-6 text-left --image">
                      <img src="assets/graphic-google-googleplaystore.png" />
                    </div>
                  </div>
                  <img src="assets/graphic-home-loudcloud.png" />
                </div>
              </div>
              <div class="content-panel voyage">
                <div class="content-panel-text">
                  <h2>The Voyage By New Ocean</h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right --image">
                      <img src="assets/graphic-apple-appstore.png" />
                    </div>
                    <div class="col-6 text-left --image">
                      <img src="assets/graphic-google-googleplaystore.png" />
                    </div>
                  </div>
                  <img src="assets/graphic-home-voyage.png" />
                </div>
              </div>
              <div class="content-panel juntoscope">
                <div class="content-panel-text">
                  <h2>JuntoScope</h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right --image">
                      <img src="assets/graphic-apple-appstore.png" />
                    </div>
                    <div class="col-6 text-left --image">
                      <img src="assets/graphic-google-googleplaystore.png" />
                    </div>
                  </div>
                  <img src="assets/graphic-home-juntoscope.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section - contact us */}
        <section id="contat-us" class="contact-us">
          <div class="row">
            <div class="col-6 align-self-center">
              <div class="card card-block" />
            </div>

            <div class="col-6 align-self-center text-center">
              <h2>Got a vision?</h2>
              <p>We've got your back.</p>
              <h2>Contact us today to get started!</h2>

              <button class="btn btn-primary">GET IN TOUCH</button>
            </div>
          </div>
        </section>

        <app-footer />
      </div>
    );
  }
}
