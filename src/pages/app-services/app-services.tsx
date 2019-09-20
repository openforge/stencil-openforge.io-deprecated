import { Component, Build, h } from '@stencil/core';

declare var fbq;

@Component({
  tag: 'app-services',
  styleUrl: 'app-services.scss',
})
export class AppServices {
  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (Build.isBrowser) {
      fbq('track', 'ViewContent');
    }
  }

  changeMetadata() {
    // Change meta tags dynamically
    document.querySelector("meta[property='og:title']").setAttribute('content', 'Startup Consulting Services in Philadelphia | OpenForge');
    document
      .querySelector("meta[property='og:description']")
      .setAttribute(
        'content',
        'OpenForge is Philadelphia’s Top Startup Consulting Firm.  We Specialize in Startup Consulting, Application Development, and LEAN Canvas Methodologies.   Let Us Help You With Marketing and CTO As a Service.'
      );
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/services/startup-consulting/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/team-landing-header-management-team.jpeg');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'Philadelphia, Startup Consulting, App Development, CTO As a Service, Tech Consulting');
  }

  render() {
    return (
      <div class="services">
        <header class="hero">
          <div class="container desktop">
            <div class="services-graphic-background" aria-label="header" />
            <div class="row align-items-center">
              <div class="col-12 flex-column">
                <h1>
                  <app-translate key="services.landing.hero.title" />
                </h1>
                <div class="svg-header-desktop" aria-label="header" />
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-12 flex-column">
                <p>
                  <app-translate key="services.landing.hero.text" />
                </p>
              </div>
            </div>
          </div>
          <div class="container mobile">
            <div class="row align-items-center">
              <div class="col-12 flex-column">
                <app-img src="/assets/services-graphic-header.png" alt="Header" />
                <h1>
                  <app-translate key="services.landing.hero.title" />
                </h1>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-12 flex-column">
                <p>
                  <app-translate key="services.landing.hero.text" />
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="our-services" class="our-services">
          <div class="row card flex-fill">
            <div class="col-lg-6 col-md-12 col-sm-12 img-col">
              <app-img class="img-fluid" src="/assets/services/startup-consulting/header.png" alt="Startup Consulting" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <h3>
                <app-translate key="services.landing.technology-consulting.title" />
              </h3>
              <p>
                <app-translate key="services.landing.technology-consulting.text" />
              </p>
              <stencil-route-link url="/services/startup-consulting">See More</stencil-route-link>
            </div>
          </div>

          <div class="row card flex-fill">
            <div class="col-lg-6 col-md-12 col-sm-12 img-col mobile">
              <app-img class="img-fluid" src="/assets/services/app-developer/header.png" alt="Web App Development" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <h3>
                <app-translate key="services.landing.webapp-development.title" />
              </h3>
              <p>
                <app-translate key="services.landing.webapp-development.text" />
              </p>
              <stencil-route-link url="/services/app-developer">See More</stencil-route-link>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 img-col desktop">
              <app-img class="img-fluid" src="/assets/services/app-developer/header.png" alt="Web App Development" />
            </div>
          </div>

          <div class="row card flex-fill">
            <div class="col-lg-6 col-md-12 col-sm-12 img-col">
              <app-img class="img-fluid" src="/assets/services/app-designer/header.png" alt="Digital Experience Design" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <h3>
                <app-translate key="services.landing.digital-experience-design.title" />
              </h3>
              <p>
                <app-translate key="services.landing.digital-experience-design.text" />
              </p>
              <stencil-route-link url="/services/app-designer">See More</stencil-route-link>
            </div>
          </div>

          <div class="row card flex-fill">
            <div class="col-lg-6 col-md-12 col-sm-12 img-col mobile">
              <app-img class="img-fluid" src="/assets/services/training/header.png" alt="Process Training Support" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <h3>
                <app-translate key="services.landing.process-training-support.title" />
              </h3>
              <p>
                <app-translate key="services.landing.process-training-support.text" />
              </p>
              <stencil-route-link url="/services/training">See More</stencil-route-link>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 img-col desktop">
              <app-img class="img-fluid" src="/assets/services/training/header.png" alt="Process Training Support" />
            </div>
          </div>
        </section>

        <section id="worked-with" class="worked-with">
          <div class="container text-center">
            <div class="row header">
              <div class="col-12">
                <h2>Who We've Worked With</h2>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-bb.png" alt="BB logo" />
              </div>

              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-aeris.png" alt="Aeris logo" />
              </div>

              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-mobilemeasures.png" alt="Mobile Measures logo" />
              </div>

              <div class="col-md-3 col-sm-12">
                <app-img class="img-fluid no-pad" src="/assets/services-logo-kemin.png" alt="Kemin logo" />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-sm-12">
                <app-img class="img-fluid pad" src="/assets/services-logo-newocean.png" alt="New Ocean Health logo" />
              </div>

              <div class="col-md-6 col-sm-12">
                <app-img class="img-fluid pad" src="/assets/services-logo-wharton.png" alt="Wharton logo" />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-sm-12 align-right">
                <app-img class="img-fluid pad" src="/assets/services-logo-redqueen.jpg" alt="RedQueen logo" />
              </div>

              <div class="col-md-6 col-sm-12 align-left">
                <app-img class="img-fluid pad" src="/assets/services-logo-loudcloud.png" alt="LoudCloud logo" />
              </div>
            </div>
          </div>
        </section>

        <app-cta />
        <app-footer />
      </div>
    );
  }
}
