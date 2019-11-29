import { Component, h } from '@stencil/core';

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

    /* tslint:disable-next-line */
    $(document).ready(function() {
      // Force bootstrap to initialize carousel
      const processCarousel = $('#myCarousel');
      setTimeout(() => bootstrap.Carousel._jQueryInterface.call(processCarousel, processCarousel.data()), 0);
      console.log(processCarousel);

      ($('#myCarousel') as any).carousel({
        interval: false,
      });

      $('.carousel .carousel-item').each(function() {
        let next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next
          .children(':first-child')
          .clone()
          .appendTo($(this));
        if (next.next().length > 0) {
          next
            .next()
            .children(':first-child')
            .clone()
            .appendTo($(this));
        } else {
          $(this)
            .siblings(':first')
            .children(':first-child')
            .clone()
            .appendTo($(this));
        }
      });
    });
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

  scrollToTrustedPartners() {
    const section = document.getElementById('trusted-partners');
    section.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  scrollToAdditionalPartners() {
    const section = document.getElementById('additional-partners');
    section.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="partners">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <span onClick={() => this.scrollToTrustedPartners()}>
                  <app-translate keyword="partners.hero.trusted" />
                </span>
                <span onClick={() => this.scrollToAdditionalPartners()}>
                  <app-translate keyword="partners.hero.additional" />
                </span>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-5 order-md-2 d-flex justify-content-center">
                <img src="/assets/svg/about-graphic-honesty.svg" alt="Header Graphic" />
              </div>
              <div class="col-sm-12 col-md-7 order-md-1">
                <h1>
                  <app-translate keyword={`partners.hero.title`} />
                </h1>
                <p>
                  <app-translate keyword={`partners.hero.text`} />
                </p>
                <button onClick={() => this.scrollToTrustedPartners()} class="btn btn-primary btn-partner">
                  <app-translate keyword="partners.hero.button" />
                </button>
              </div>
            </div>
            <div class="line-break" />
          </div>
        </header>

        <section id="trusted-partners" class="trusted-partners">
          <div>
            <div class="row header">
              <div class="col-12">
                <h2>
                  <app-translate keyword="partners.hero.trusted" />
                </h2>
              </div>
            </div>

            <div class="row">
              <div class="col-12 text-center">
                <div class="carousel slide" id="myCarousel">
                  <div class="carousel-inner">
                    <div class="row no-gutters carousel-item active">
                      <div class="col-4 carousel-item-col">
                        <img src="/assets/partners-ionic-logo-landscape.png" class="img-fluid" />
                      </div>
                    </div>
                    <div class="row no-gutters carousel-item">
                      <div class="col-4 carousel-item-col">
                        <img src="/assets/partners-ionic-logo-landscape.png" class="img-fluid" />
                      </div>
                    </div>
                    <div class="row no-gutters carousel-item">
                      <div class="col-4 carousel-item-col">
                        <img src="/assets/partners-ionic-logo-landscape.png" class="img-fluid" />
                      </div>
                    </div>
                    <div class="row no-gutters carousel-item">
                      <div class="col-4 carousel-item-col">
                        <img src="/assets/partners-ionic-logo-landscape.png" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <a class="col-4 left carousel-control" href="#myCarousel" data-slide="prev">
                <i class="fa fa-chevron-left" />
              </a>
              <p class="col-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a class="col-4 right carousel-control" href="#myCarousel" data-slide="next">
                <i class="fa fa-chevron-right" />
              </a>
            </div>
          </div>
        </section>

        <section id="additional-partners" class="additional-partners">
          <div class="container">
            <div class="row header">
              <div class="col-12">
                <h2>
                  <app-translate keyword="partners.hero.additional" />
                </h2>
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
                <button class="button">
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
