import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import stickySidebar from 'sticky-sidebar';

import { translate } from '../../services/translation.service';

/* tslint:disable-next-line */
import $ from 'jquery';

declare var fbq;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  @Prop() history: RouterHistory;

  @Prop({ context: 'isServer' })
  private isServer: boolean;

  private sticky;

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }

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
    });

    /* tslint:disable-next-line */
    $(document).ready(function() {
      /* tslint:disable-next-line */
      const self = this;
      /* tslint:disable-next-line */
      window.setTimeout(function() {
        console.log('init sticky');
        self.sticky = new stickySidebar('.sidebar', {
          topSpacing: 75.45,
          bottomSpacing: 0,
          containerSelector: '.main-content',
          innerWrapperSelector: '.content-panel-inner',
          minWidth: 767,
        });
        self.sticky.updateSticky();
      }, 0);

      // setTimeout(() => {
      //   (jQuery('#processCarousel') as any).carousel({}).trigger('slide');
      // }, 3000);

      setTimeout(() => {
        jQuery('#processCarousel').carousel();
      }, 3000);

      // setTimeout(() => {
      //   (function ($) {
      //     ($('.carousel') as any).carousel();
      //   })(jQuery);
      // }, 3000);

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

  componentDidUnload() {
    this.sticky.destroy();
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
                <h1>
                  <app-translate key="home.hero.title" />
                </h1>
                <h2>
                  <app-translate key="home.hero.subTitle" />
                </h2>
                <p class="subtext">
                  <i>
                    <app-translate key="home.hero.subtext" />
                  </i>
                </p>
                <p class="subtext-mobile">
                  <app-translate key="home.hero.subtextMobile" />
                </p>
              </div>
            </div>
          </div>
          <object
            data="/assets/svg/home-graphic-header.svg"
            class="svg-header-desktop"
          />
        </header>

        <section id="process" class="process">
          <div class="text-center header">
            <h2>
              <app-translate key="home.process.title" />
            </h2>
          </div>

          <div id="processCarousel" class="carousel slide">
            <app-carousel-indicators
              class="carousel-main-indicators"
              activeIndex="0"
            />
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center">
                    <img
                      class="carousel-image-h"
                      src="/assets/svg/home-graphic-process-discovery.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.discovery.title" />
                      </h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="0"
                      />
                      <p>
                        <app-translate key="home.process.discovery.text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center">
                    <img
                      class="carousel-image-h"
                      src="/assets/svg/home-graphic-process-design.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.design.title" />
                      </h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="1"
                      />
                      <p>
                        <app-translate key="home.process.design.text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center">
                    <img
                      class="carousel-image"
                      src="/assets/svg/home-graphic-process-development.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.development.title" />
                      </h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="2"
                      />
                      <p>
                        <app-translate key="home.process.development.text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center">
                    <img
                      class="carousel-image"
                      src="/assets/svg/home-graphic-process-deployment.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.deployment.title" />
                      </h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="3"
                      />
                      <p>
                        <app-translate key="home.process.deployment.text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center ">
                    <img
                      class="carousel-image-userfeedback"
                      src="/assets/svg/home-graphic-process-userfeedback.svg"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.userfeedback.title" />
                      </h2>
                      <app-carousel-indicators
                        class="carousel-mobile-indicators"
                        activeIndex="4"
                      />
                      <p>
                        <app-translate key="home.process.userfeedback.text" />
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
                    <h2>{translate('home.services.mobileTechnology.title')}</h2>
                    <p>{translate('home.services.mobileTechnology.text')}</p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>
                    <app-translate key="home.services.mobileTechnology.example" />
                  </h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right">
                      <a
                        href="https://itunes.apple.com/us/app/loudcloud-disposable-numbers/id723331666?mt=8"
                        target="_blank"
                      >
                        <img src="/assets/graphic-apple-appstore.png" />
                      </a>
                    </div>
                    <div class="col-6 text-left">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.ignitras.loudcloud&hl=en"
                        target="_blank"
                      >
                        <img src="/assets/graphic-google-googleplaystore.png" />
                      </a>
                    </div>
                  </div>
                  <img
                    src="/assets/shared-graphic-loudcloud.png"
                    class="phone-image"
                  />
                </div>
              </div>
              <div class="content-panel voyage">
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h2>
                      {translate('home.services.digitalExperience.title')}
                    </h2>
                    <p>{translate('home.services.digitalExperience.text')}</p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>
                    <app-translate key="home.services.digitalExperience.example" />
                  </h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right">
                      <a
                        href="https://itunes.apple.com/us/app/the-voyage-by-new-ocean-health/id779637437?mt=8"
                        target="_blank"
                      >
                        <img src="/assets/graphic-apple-appstore.png" />
                      </a>
                    </div>
                    <div class="col-6 text-left">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.carecaminnovations.mobile"
                        target="_blank"
                      >
                        <img src="/assets/graphic-google-googleplaystore.png" />
                      </a>
                    </div>
                  </div>
                  <img
                    src="/assets/shared-graphic-voyage.png"
                    class="phone-image"
                  />
                </div>
              </div>
              <div class="content-panel juntoscope">
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h2>{translate('home.services.brandingDesign.title')}</h2>
                    <p>{translate('home.services.brandingDesign.text')}</p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>
                    <app-translate key="home.services.brandingDesign.example" />
                  </h2>
                  <div class="row store-buttons">
                    <div class="col-6 text-right">
                      <a
                        href="https://itunes.apple.com/us/app/digi-thermo/id1307130445?mt=8"
                        target="_blank"
                      >
                        <img src="/assets/graphic-apple-appstore.png" />
                      </a>
                    </div>
                    <div class="col-6 text-left">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.webjuntollc.digithermoapp"
                        target="_blank"
                      >
                        <img src="/assets/graphic-google-googleplaystore.png" />
                      </a>
                    </div>
                  </div>
                  <img
                    src="/assets/shared-graphic-juntoscope.png"
                    class="phone-image"
                  />
                </div>
              </div>
              <div class="content-panel last-panel" />
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta />

        <app-footer />
      </div>
    );
  }
}
