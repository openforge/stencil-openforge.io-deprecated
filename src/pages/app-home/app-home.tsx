import { Component, Prop, State, h, Build } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

import { translate } from '../../services/translation.service';
import { BlogPost } from '../../model/blog-post.model';
import * as Fetch from '../../shared/fetch-handler';

/* tslint:disable-next-line */
declare var bootstrap;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  @Prop() history: RouterHistory;

  @State() featuredPost: BlogPost = null;
  @State() featuredIsError: boolean = false;
  @State() featuredIsLoading: boolean = true;
  timer: any;
  currItem = 0;

  componentWillLoad() {
    if (Build.isBrowser) {
      this.getFeaturedPost();
    }
  }

  componentDidLoad() {
    /* tslint:disable-next-line */
    window.addEventListener('scroll', () => {
      const innerPanel = document.getElementById('content-panel-inner');
      if (innerPanel && innerPanel.offsetHeight) {
        const rect = innerPanel.getBoundingClientRect();
        const pos = rect.top + rect.height / 2;
        let done = false;
        const panels = document.querySelectorAll('.content-panel');
        panels.forEach((el: HTMLElement) => {
          const innerRect = el.getBoundingClientRect();
          if (!done && pos < innerRect.top + innerRect.height) {
            innerPanel.innerHTML = el.children[0].innerHTML;
            done = true;
          }
        });

        if (innerPanel.offsetTop === (panels[0] as HTMLElement).offsetTop) {
          innerPanel.innerHTML = panels[0].innerHTML;
        }
      }
    });

    if (Build.isBrowser) {
      $(document).ready(function() {
        // Force bootstrap to initialize carousel
        const processCarousel = $('#processCarousel');
        setTimeout(() => bootstrap.Carousel._jQueryInterface.call(processCarousel, processCarousel.data()), 0);

        $(window).trigger('scroll'); // init the value
      });
    }
  }

  componentDidUnload() {
    clearInterval(this.timer);
  }

  async getFeaturedPost() {
    this.featuredIsLoading = true;
    this.featuredPost = await Fetch.fetchOneBlogPost();
    this.featuredIsLoading = false;
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
                  <app-translate keyword="home.hero.title" />
                </h1>
                <h2>
                  <app-translate keyword="home.hero.subTitle" />
                </h2>
                <div class="svg-header-desktop" aria-label="header" />
                <div class="svg-header-mobile" aria-label="header" />
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
                    <app-translate keyword="home.work.mobileWebApplications.example" />
                  </h2>
                  <div class="row">
                    <img src="/assets/apps/vanlife/graphic-example-1.png" class="behind-left" alt="vanlife app screenshot" />
                    <img src="/assets/apps/vanlife/graphic-example-2.png" class="front-center" alt="vanlife app screenshot" />
                    <img src="/assets/apps/vanlife/graphic-example-3.png" class="behind-right" alt="vanlife app screenshot" />
                  </div>
                  <div class="store-buttons">
                    <a href="https://itunes.apple.com/us/app/the-vanlife-app/id1447689037?mt=8" target="_blank" rel="noopener" data-cy="vanlife-apple">
                      <img src="/assets/graphic-apple-appstore.png" alt="Download link on Apple App Store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.thevanlifeapp.vanlifeapp&hl=en" target="_blank" rel="noopener" data-cy="vanlife-google">
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
                    <app-translate keyword="home.work.mobileTechnology.example" />
                  </h2>
                  <div class="row">
                    <img src="/assets/apps/loudcloud/graphic-example-1.png" class="behind-left" alt="loudcloud app screenshot" />
                    <img src="/assets/apps/loudcloud/graphic-example-2.png" class="front-center" alt="loudcloud app screenshot" />
                    <img src="/assets/apps/loudcloud/graphic-example-3.png" class="behind-right" alt="loudcloud app screenshot" />
                  </div>
                  <div class="store-buttons">
                    <a href="https://itunes.apple.com/us/app/loudcloud-disposable-numbers/id723331666?mt=8" target="_blank" rel="noopener" data-cy="loudcloud-apple">
                      <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.ignitras.loudcloud&hl=en" target="_blank" rel="noopener" data-cy="loudcloud-google">
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
                    <app-translate keyword="home.work.digitalExperience.example" />
                  </h2>
                  <div class="row">
                    <img src="/assets/apps/voyage/graphic-example-1.png" class="behind-left" alt="voyage app screenshot" />
                    <img src="/assets/apps/voyage/graphic-example-2.png" class="front-center" alt="voyage app screenshot" />
                    <img src="/assets/apps/voyage/graphic-example-3.png" class="behind-right" alt="voyage app screenshot" />
                  </div>
                  <div class="store-buttons">
                    <a href="https://itunes.apple.com/us/app/the-voyage-by-new-ocean-health/id779637437?mt=8" target="_blank" rel="noopener" data-cy="voyage-apple">
                      <img src="/assets/graphic-apple-appstore.png" alt="download on app store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.carecaminnovations.mobile" target="_blank" rel="noopener" data-cy="voyage-google">
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
              <app-translate keyword="home.process.title" />
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
                        <app-translate keyword="home.process.discovery.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="0" />
                      <p>
                        <app-translate keyword="home.process.discovery.text" />
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
                        <app-translate keyword="home.process.design.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="1" />
                      <p>
                        <app-translate keyword="home.process.design.text" />
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
                        <app-translate keyword="home.process.development.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="2" />
                      <p>
                        <app-translate keyword="home.process.development.text" />
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
                        <app-translate keyword="home.process.deployment.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="3" />
                      <p>
                        <app-translate keyword="home.process.deployment.text" />
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
                        <app-translate keyword="home.process.userfeedback.title" />
                      </h2>
                      <app-carousel-indicators class="carousel-mobile-indicators" activeIndex="4" />
                      <p>
                        <app-translate keyword="home.process.userfeedback.text" />
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
