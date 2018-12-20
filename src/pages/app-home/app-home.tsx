import { Component, Prop, Listen } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import stickySidebar from 'sticky-sidebar';

/* tslint:disable-next-line */
import $ from 'jquery';

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

  @Listen('window:resize')
  handleMobile() {
    if (window.innerWidth < 768) {
      console.log('innerWidth');
      /* tslint:disable-next-line */
      $('#vision-svg').attr('src', 'assets/svg/mobile-vision.svg');
    } else {
      /* tslint:disable-next-line */
      $('#vision-svg').attr('src', 'assets/svg/vision.svg');
    }
  }

  componentDidLoad() {
    this.handleMobile();

    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }

    new stickySidebar('.sidebar', {
      topSpacing: 75.45,
      bottomSpacing: 0,
      containerSelector: '.main-content',
      innerWrapperSelector: '.content-panel-inner',
      minWidth: 767,
    });

    /* tslint:disable-next-line */
    $(window).on('scroll resize', function() {
      const pos =
        $('#content-panel-inner').offset().top +
        $('#content-panel-inner').height();
      let done = false;
      $('.content-panel').each(function() {
        if (
          !done &&
          pos <= Math.floor($(this).offset().top + $(this).height())
        ) {
          const newDescr = $(this)
            .find('.description')
            .html();

          $('#content-panel-inner').html(newDescr);

          done = true;
        }
      });

      if (
        $('#content-panel-inner').offset().top ===
        $('.content-panel')
          .first()
          .offset().top
      ) {
        const newDescr = $('.content-panel')
          .first()
          .find('.description')
          .html();

        $('#content-panel-inner').html(newDescr);
      }

      if (
        !$('.sidebar')
          .first()
          .hasClass('is-affixed')
      ) {
        $('#content-panel-inner').css({ width: 'initial' });
      }
    });

    /* tslint:disable-next-line */
    $(document).ready(function() {
      $(window).trigger('scroll'); // init the value

      if (
        $('.sidebar')
          .first()
          .hasClass('is-affixed')
      ) {
        $('.sidebar')
          .first()
          .removeClass('is-affixed');
        $('#content-panel-inner').css({ width: 'initial' });
      }
    });
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
              <div class="hero-content col-12">
                <h1>Creating Digital Experiences</h1>
                <h2>Every Day*</h2>
                <p class="subtext">
                  <i>*Monday-Friday</i>
                </p>
                <p class="subtext-mobile">
                  Work with our team of highly skilled designers, developers,
                  and consultants to develop solutions and processes that fit
                  your business requirements.
                </p>
              </div>
            </div>
          </div>
          <object
            data="/assets/svg/graphic-home-header.svg"
            class="svg-header-desktop"
          />
        </header>

        <section id="process" class="process">
          <div class="text-center header">
            <h2>Our Process</h2>
          </div>

          <div id="processCarousel" class="carousel slide" data-ride="carousel">
            <app-carousel-indicators
              class="carousel-main-indicators"
              activeIndex="0"
            />
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center">
                    <object
                      class="carousel-image-h"
                      data="assets/svg/discovery.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>Discovery</h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="0"
                      />
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
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center">
                    <object
                      class="carousel-image-h"
                      data="assets/svg/process-design.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>Design</h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="1"
                      />
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
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center">
                    <object
                      class="carousel-image"
                      data="assets/svg/process-development.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>Development</h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="2"
                      />
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
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center">
                    <object
                      class="carousel-image"
                      data="assets/svg/process-deployment.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>Deployment</h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="3"
                      />
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
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center ">
                    <object
                      class="carousel-image-userfeedback"
                      data="assets/svg/process-userfeedback.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>User Feedback</h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="4"
                      />
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
              <div
                class="sidebar__inner content-panel-inner"
                id="content-panel-inner"
              />
            </div>
            <div class="content">
              <div class="content-panel loudcloud">
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h2>Mobile Technology</h2>
                    <p>
                      We utilize technologies such as VoIP, Bluetooth LE, and
                      other IOT technologies to bring a whole new level of
                      connectivity to your application. Our experts in mobile
                      application development can interface with any existing
                      API or standard to integrate systems properly and
                      securely.
                    </p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>LoudCloud</h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right">
                      <a
                        href="https://itunes.apple.com/us/app/loudcloud-disposable-numbers/id723331666?mt=8"
                        target="_blank"
                      >
                        <img src="assets/graphic-apple-appstore.png" />
                      </a>
                    </div>
                    <div class="col-6 text-left">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.ignitras.loudcloud&hl=en"
                        target="_blank"
                      >
                        <img src="assets/graphic-google-googleplaystore.png" />
                      </a>
                    </div>
                  </div>
                  <img
                    src="assets/home-graphic-loudcloud.png"
                    class="phone-image"
                  />
                </div>
              </div>
              <div class="content-panel voyage">
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h2>Digital Experience</h2>
                    <p>
                      It is our firm belief that we should engage users by
                      providing value, both fundamentally and visually. By
                      combining the psychology of design with the capabilities
                      of the digital age, we are able to develop solutions that
                      think outside the box.
                    </p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>The Voyage By New Ocean</h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right">
                      <a
                        href="https://itunes.apple.com/us/app/the-voyage-by-new-ocean-health/id779637437?mt=8"
                        target="_blank"
                      >
                        <img src="assets/graphic-apple-appstore.png" />
                      </a>
                    </div>
                    <div class="col-6 text-left">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.carecaminnovations.mobile"
                        target="_blank"
                      >
                        <img src="assets/graphic-google-googleplaystore.png" />
                      </a>
                    </div>
                  </div>
                  <img
                    src="assets/home-graphic-voyage.png"
                    class="phone-image"
                  />
                </div>
              </div>
              <div class="content-panel juntoscope">
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h2>Digital Branding & Web Design</h2>
                    <p>
                      Our team of industry leading designers will help bring
                      your vision to market with a complete branding design
                      package. Don’t let your customers feel disconnected. Let
                      our experts use design theory and psychology to help
                      better connect to your business with your customers.
                    </p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>JuntoScope</h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right">
                      <a
                        href="https://itunes.apple.com/us/app/digi-thermo/id1307130445?mt=8"
                        target="_blank"
                      >
                        <img src="assets/graphic-apple-appstore.png" />
                      </a>
                    </div>
                    <div class="col-6 text-left">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.webjuntollc.digithermoapp"
                        target="_blank"
                      >
                        <img src="assets/graphic-google-googleplaystore.png" />
                      </a>
                    </div>
                  </div>
                  <img
                    src="assets/home-graphic-juntoscope.png"
                    class="phone-image"
                  />
                </div>
              </div>
              <div class="content-panel last-panel" />
            </div>
          </div>
        </section>

        {/* section - contact us */}
        <section id="contat-us" class="contact-us">
          <div class="row">
            <div class="col-md-6 col-sm-12 text-center cta-image">
              <object data="assets/svg/vision.svg" id="vision-svg" />
            </div>

            <div class="col-md-6 col-sm-12 align-self-center text-center cta-text">
              <h2>Got a vision?</h2>
              <p>We've got your back.</p>
              <h2>Contact us today to get started!</h2>

              <stencil-route-link url="/contact">
                <button class="btn btn-primary">GET IN TOUCH</button>
              </stencil-route-link>
            </div>
          </div>
        </section>

        <app-footer />
      </div>
    );
  }
}
