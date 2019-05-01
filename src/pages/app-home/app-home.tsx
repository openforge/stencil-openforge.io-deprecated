import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

import { translate } from '../../services/translation.service';
import { BlogPost } from '../../model/blog-post.model';

/* tslint:disable-next-line */
import $ from 'jquery';

declare var fbq;
declare var bootstrap;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  @Prop() history: RouterHistory;

  @Prop({ context: 'isServer' })
  private isServer: boolean;

  @Prop() butter: any;

  @State() featuredPost: BlogPost = null;
  @State() featuredIsError: boolean = false;
  @State() featuredIsLoading: boolean = true;

  componentWillLoad() {
    if (!this.isServer) {
      this.getFeaturedPost();
    }
  }

  componentDidLoad() {
    // isServer is false when running in the browser
    // and true when being prerendered
    if (!this.isServer) {
      fbq('track', 'ViewContent');
    }

    /* tslint:disable-next-line */
    $(window).on('scroll resize', function() {
      if ($('#content-panel-inner') && $('#content-panel-inner').offset()) {
        const pos = $('#content-panel-inner').offset().top + $('#content-panel-inner').height() / 2;
        let done = false;
        $('.content-panel').each(function() {
          if (!done && pos <= Math.floor($(this).offset().top + $(this).height())) {
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
      }
    });

    if (!this.isServer) {
      /* tslint:disable-next-line */
      $(document).ready(function() {
        // Force bootstrap to initialize carousel
        const processCarousel = $('#processCarousel');
        setTimeout(() => bootstrap.Carousel._jQueryInterface.call(processCarousel, processCarousel.data()), 0);

        $(window).trigger('scroll'); // init the value
      });
    }
  }

  getFeaturedPost() {
    this.featuredIsLoading = true;
    const listOptions = { page: 1, page_size: 1, exclude_body: true, tag_slug: 'featured' };
    this.butter.post
    .list(listOptions)
    .then(resp => {
      if (resp.data.data.length > 0) {
        this.featuredPost = resp.data.data[0];
        this.featuredIsLoading = false;
      }
    })
    .catch(resp => {
      console.log('resp - ', resp);
      this.featuredIsError = true;
      this.featuredIsLoading = false;
    });
  }

  renderFeaturedPost(featuredPost: BlogPost, isLoading: boolean, isError: boolean) {
    if (isError) {
      return <div>Error loading featured post</div>;
    }
    if (isLoading) {
      return (
        <div class="loading">
          <i class="fa fa-spinner fa-spin" />
        </div>
      );
    }
    return <app-blog-featured blogPost={featuredPost} />;
  }

  render() {
    const featuredPost = this.renderFeaturedPost(this.featuredPost, this.featuredIsLoading, this.featuredIsError);
    return (
      <div class="home">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 flex-column">
                <h1>
                  <app-translate key="home.hero.title" />
                </h1>
                <h2>
                  <app-translate key="home.hero.subTitle" />
                </h2>
                <object data="/assets/svg/home-graphic-header.svg" class="svg-header-desktop" aria-label="header" />
                <object data="/assets/svg/home-graphic-header-mobile.svg" class="svg-header-mobile" aria-label="header" />
                </div>
            </div>
          </div>
        </header>

        <div class="featured-blog">{featuredPost}</div>

        <section id="work" class="work">
          <div class="main-content">
            <div id="sticky-sidebar" class="sidebar">
              <div id="sticky-sidebar-inner">
                <div id="content-panel-inner" class="content-panel-inner" />
              </div>
            </div>
            <div class="content">
              <div class="content-panel vanlife">
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h3>{translate('home.work.experts')}</h3>
                    <h2>{translate('home.work.mobileWebApplications.title')}</h2>
                    <p>{translate('home.work.mobileWebApplications.text')}</p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>
                    <app-translate key="home.work.mobileWebApplications.example" />
                  </h2>
                  <div class="row">
                    <img src="/assets/home-graphic-work-vanlife-1.png" class="behind-left" alt="vanlife screenshot" />
                    <img src="/assets/home-graphic-work-vanlife-2.png" class="front-center" alt="vanlife screenshot" />
                    <img src="/assets/home-graphic-work-vanlife-3.png" class="behind-right" alt="vanlife screenshot" />
                  </div>
                  <div class="store-buttons">
                    <a href="https://itunes.apple.com/us/app/the-vanlife-app/id1447689037?mt=8" target="_blank" rel="noopener">
                      <img src="/assets/graphic-apple-appstore.png" alt="Download link on Apple App Store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.thevanlifeapp.vanlifeapp&hl=en" target="_blank" rel="noopener">
                      <img src="/assets/graphic-google-googleplaystore.png" alt="Download link on Google Play Store" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="content-panel loudcloud">
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h3>{translate('home.work.experts')}</h3>
                    <h2>{translate('home.work.mobileTechnology.title')}</h2>
                    <p>{translate('home.work.mobileTechnology.text')}</p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>
                    <app-translate key="home.work.mobileTechnology.example" />
                  </h2>
                  <div class="row">
                    <img src="/assets/home-graphic-work-loudcloud-1.png" class="behind-left" alt="loudcloud screenshot" />
                    <img src="/assets/home-graphic-work-loudcloud-2.png" class="front-center" alt="loudcloud screenshot" />
                    <img src="/assets/home-graphic-work-loudcloud-3.png" class="behind-right" alt="loudcloud screenshot" />
                  </div>
                  <div class="store-buttons">
                    <a href="https://itunes.apple.com/us/app/loudcloud-disposable-numbers/id723331666?mt=8" target="_blank" rel="noopener">
                      <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.ignitras.loudcloud&hl=en" target="_blank" rel="noopener">
                      <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="content-panel voyage">
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h3>{translate('home.work.experts')}</h3>
                    <h2>{translate('home.work.digitalExperience.title')}</h2>
                    <p>{translate('home.work.digitalExperience.text')}</p>
                  </div>
                </div>
                <div class="content-panel-image">
                  <h2>
                    <app-translate key="home.work.digitalExperience.example" />
                  </h2>
                  <div class="row">
                    <img src="/assets/home-graphic-work-voyage-1.png" class="behind-left" alt="voyage screenshot" />
                    <img src="/assets/home-graphic-work-voyage-2.png" class="front-center" alt="voyage screenshot" />
                    <img src="/assets/home-graphic-work-voyage-3.png" class="behind-right" alt="voyage screenshot" />
                  </div>
                  <div class="store-buttons">
                    <a href="https://itunes.apple.com/us/app/the-voyage-by-new-ocean-health/id779637437?mt=8" target="_blank" rel="noopener">
                      <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.carecaminnovations.mobile" target="_blank" rel="noopener">
                      <img src="/assets/graphic-google-googleplaystore.png" alt="download on play store" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="content-panel last-panel" />
            </div>
          </div>
        </section>

        <section id="process" class="process">
          <div class="text-center header">
            <h2>
              <app-translate key="home.process.title" />
            </h2>
          </div>

          <div id="processCarousel" class="carousel slide" data-ride="carousel" data-pause="false">
            <app-carousel-indicators class="carousel-main-indicators" activeIndex="0" />
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 align-self-center text-center">
                    <app-img class="carousel-image-h" src="/assets/svg/home-graphic-process-discovery.svg" alt="discovery" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.discovery.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="0" />
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
                    <app-img class="carousel-image-h" src="/assets/svg/home-graphic-process-design.svg" alt="design" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.design.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="1" />
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
                    <app-img class="carousel-image" src="/assets/svg/home-graphic-process-development.svg" alt="development" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.development.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="2" />
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
                    <app-img class="carousel-image" src="/assets/svg/home-graphic-process-deployment.svg" alt="deployment" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.deployment.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="3" />
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
                    <app-img class="carousel-image-userfeedback" src="/assets/svg/home-graphic-process-userfeedback.svg" alt="user feedback" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 carousel-panel align-self-center">
                    <div class="carousel-text">
                      <h2>
                        <app-translate key="home.process.userfeedback.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="4" />
                      <p>
                        <app-translate key="home.process.userfeedback.text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#processCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#processCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta />

        <app-footer />
      </div>
    );
  }
}
