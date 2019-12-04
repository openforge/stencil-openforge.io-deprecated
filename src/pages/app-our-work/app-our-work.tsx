import { Component } from '@stencil/core';

@Component({
  tag: 'app-our-work',
  styleUrl: 'app-our-work.scss',
})
export class AppOurWork {
  render() {
    return (
      <div class="ourwork">
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 flex-column text">
                <h1>Our Work</h1>
                <h2>Each day we work to make our world better by design. Below you will find examples of projects that we've had the pleasure of working on.</h2>
              </div>
            </div>
          </div>
        </header>
        <section id="work" class="work">
          <div class="main-content">
            <div id="sticky-sidebar" class="sidebar">
              <div id="sticky-sidebar-inner">
                <div id="content-panel-inner" class="content-panel-inner" />
              </div>
            </div>
            <div class="content">
              <div class="content-panel vanlife">
                <div class="content-panel-image">
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
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h3></h3>
                    <h2></h2>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="content-panel loudcloud">
                <div class="content-panel-image">
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
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h3></h3>
                    <h2></h2>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="content-panel voyage">
                <div class="content-panel-image">
                  <h2>
                    <app-translate key="home.work.digitalExperience.example" />
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
                <div class="content-panel-inner description">
                  <div class="panel-inner-text">
                    <h3></h3>
                    <h2></h2>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="content-panel last-panel" />
            </div>
          </div>
        </section>
        <app-cta />
        <app-footer />
      </div>
    );
  }
}
