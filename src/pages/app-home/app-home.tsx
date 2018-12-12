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
