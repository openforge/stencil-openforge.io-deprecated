import { Component, h, Build } from '@stencil/core';

// import { translate } from '../../services/translation.service';

/* tslint:disable-next-line */
declare var bootstrap;

@Component({
  tag: 'app-partners',
  styleUrl: 'app-partners.scss',
})
export class AppPartners {
  componentDidLoad() {
    this.changeMetadata();
    if (Build.isBrowser) {
      /* tslint:disable-next-line */
      $(document).ready(function() {
        // Force bootstrap to initialize carousel
        const partnersCarousel = $('#partnersCarousel');
        setTimeout(() => bootstrap.Carousel._jQueryInterface.call(partnersCarousel, partnersCarousel.data()), 0);
      });
    }
  }

  changeMetadata() {
    // Change meta tags dynamically
    document.querySelector("meta[property='og:title']").setAttribute('content', 'Mobile App Developer Experts | OpenForge');
    document
      .querySelector("meta[property='og:description']")
      .setAttribute('content', 'Trust Our Experts in Mobile Application Development and Design.  We are Philadelphia’s top Mobile Application Development Agency');
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/services/app-developer/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/team-landing-header-development-team.jpg');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'Mobile App Developer, Mobile App Development, Progressive Web App');
  }

  render() {
    return (
      <div class="partners">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-5 order-md-2 d-flex justify-content-center">
                <img data-cy="head-image" src="/assets/svg/partners-graphic-header.svg" alt="Header Graphic" />
              </div>
              <div class="col-sm-12 col-md-7 order-md-1">
                <h1>
                  <app-translate keyword={`partners.hero.title`} />
                </h1>
                <p>
                  <app-translate keyword={`partners.hero.text1`} />
                </p>
                <p>
                  <app-translate keyword={`partners.hero.text2`} />
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="trusted-partners" class="trusted-partners">
          <div class="row header">
            <div class="col-12">
              <h2>
                <app-translate keyword="partners.trusted.title" />
              </h2>
            </div>

            <div class="col-12 text-center">
              <div class="carousel slide" id="partnersCarousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="col-12 carousel-item-col">
                      <app-img data-cy="capp-img" src="/assets/partners-ionic-logo-landscape.png" />
                      <p>
                        <app-translate keyword="partners.trusted.ionic" />
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-12 carousel-item-col">
                      <app-img data-cy="capp-img" src="/assets/partners-1776-logo.png" />
                      <p>
                        <app-translate keyword="partners.trusted.t1776" />
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-12 carousel-item-col">
                      <app-img data-cy="capp-img" src="/assets/partners-strapi-logo.png" />
                      <p>
                        <app-translate keyword="partners.trusted.strapi" />
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-12 carousel-item-col">
                      <app-img data-cy="capp-img" src="/assets/partners-215-logo.png" />
                      <p>
                        <app-translate keyword="partners.trusted.t215Marketing" />
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-12 carousel-item-col">
                      <app-img data-cy="capp-img" src="/assets/partners-financial-gps-logo.png" />
                      <p>
                        <app-translate keyword="partners.trusted.finantialGPS" />
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-12 carousel-item-col">
                      <app-img data-cy="capp-img" src="/assets/partners-drexel-logo.png" />
                      <p>
                        <app-translate keyword="partners.trusted.drexel" />
                      </p>
                    </div>
                  </div>
                </div>
                <ol class="carousel-indicators">
                  <li data-target="#partnersCarousel" data-slide-to="0" class="active" />
                  <li data-target="#partnersCarousel" data-slide-to="1" />
                  <li data-target="#partnersCarousel" data-slide-to="2" />
                  <li data-target="#partnersCarousel" data-slide-to="3" />
                  <li data-target="#partnersCarousel" data-slide-to="4" />
                  <li data-target="#partnersCarousel" data-slide-to="5" />
                </ol>
              </div>
            </div>
            <div class="row carousel-arrows">
              <a data-cy="left-arrow" class="col-6 left carousel-control" href="#partnersCarousel" data-slide="prev">
                <i class="fa fa-chevron-left" />
              </a>
              <a data-cy="right-arrow" class="col-6 right carousel-control" href="#partnersCarousel" data-slide="next">
                <i class="fa fa-chevron-right" />
              </a>
            </div>
          </div>
        </section>

        <section id="cta" class="cta">
          <div class="row">
            <div class="col-md-6 col-sm-12 text-center cta-image" />

            <div class="col-md-6 col-sm-12 align-self-center text-center cta-text">
              <h2>
                <app-translate keyword="partners.cta.title" />
              </h2>
              <p>
                <app-translate keyword="partners.cta.subTitle" />
              </p>
              <stencil-route-link url="/contact">
                <button data-cy="cta-button" class="button">
                  <app-translate keyword="partners.cta.link" />
                </button>
              </stencil-route-link>
            </div>
          </div>
        </section>

        <app-footer />
      </div>
    );
  }
}
