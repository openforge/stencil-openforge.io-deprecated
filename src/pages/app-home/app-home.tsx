import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

declare var fbq;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  @Prop() history: RouterHistory;
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
              <li data-target="#processCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#processCarousel"  data-slide-to="1"></li>
              <li data-target="#processCarousel"  data-slide-to="2"></li>
              <li data-target="#processCarousel"  data-slide-to="3"></li>
              <li data-target="#processCarousel"  data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row --container">
                  <div class="col-6 align-self-center --image">
                    <img src="assets/svg/process-development.svg"/>
                  </div>
                  <div class="col-6 align-self-center --text">
                    <h2>
                      Discovery
                    </h2>
                    <p>
                      We'll help you evaluate your business needs and challenge your
                      assumptions before entering into the Design and Development process.
                      Make sure that the technology you're building makes sense for your business.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block" src="..." alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block" src="..." alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block" src="..." alt="Fourth slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block" src="..." alt="Fifth slide" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#processCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#processCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </section>

        {/* section - contact us */}
        <section id="contat-us" class="contact-us">
          <div class="row">
            <div class="col-6 align-self-center">
              <div class="card card-block"></div>
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
